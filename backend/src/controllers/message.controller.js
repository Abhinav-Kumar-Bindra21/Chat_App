import Message from "../models/Message.js";
import User from "../models/User.js";
import cloudinary from "../configs/cloudinary.js";
import { getReceiverSocketId, io } from "../configs/socket.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json({ success: true, filteredUser });
  } catch (error) {
    console.log("Error in getAllContacts:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getMessageByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json({ success: true, messages });
  } catch (error) {
    console.log("Error in getMessageByUserId:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { image, text } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!image && !text) {
      return res.status(400).json({ success: false, message: "Text or image is required" });
    }

    if (senderId.equals(receiverId)) {
      return res.status(400).json({ success: false, message: "Cannot send message to yourself" });
    }

    const receiverExists = await User.exists({ _id: receiverId });

    if (!receiverExists) {
      return res.status(404).json({ success: false, message: "Receiver not found" });
    }

    let imageUrl;
    if (image) {
      // upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    //todo: send message in real-time if user is online -soket.io
    console.log("receiverId:", receiverId);

    const receiverSocketId = getReceiverSocketId(receiverId);

    console.log("receiverSocketId:", receiverSocketId);

    if (receiverSocketId) {
      console.log("Emitting message...");
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json({ success: true, newMessage });
  } catch (error) {
    console.log("Error in sendMessage:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getChatPartners = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // find all the message where the logged-in user is either sender or receiver
    const message = await Message.find({
      $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }],
    });

    const chatPartnerIds = [
      ...new Set(
        message.map((msg) =>
          msg.senderId.toString() === loggedInUserId.toString() ? msg.receiverId.toString() : msg.senderId.toString(),
        ),
      ),
    ];

    const chatPartners = await User.find({ _id: { $in: chatPartnerIds } }).select("-password");

    res.status(200).json({ success: true, chatPartners });
  } catch (error) {
    console.log("Error in getChatPartners:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
