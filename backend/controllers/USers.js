import { Sequelize } from "sequelize";
import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUSers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUSerById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUSer = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: "password dan confirm password salah" });
  const hasPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hasPassword,
      role: role,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUSer = (req, res) => {};
export const deleteUSer = (req, res) => {};
