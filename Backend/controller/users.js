import { response } from "express";
import User from "../model/userModel.js";
import argon, { argon2d } from "argon2";
import { StatusCodes } from "http-status-codes";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll({
        attributes: ['uuid', 'name', 'email', 'role'] 
    });
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.messsage });
  }
};
export const getOneUser = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};
export const createUser = async (req, res) => {
  const {  nama, email, password, confirm, role } = req.body;
  if (password !== confirm) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Password Salah" });
  }
  const hashPass = await argon.hash(password);
  try {
    await User.create({
        name: nama,
        email: email,
        password: password,
        role: role

    })
    res.status(StatusCodes.CREATED).json({msg: "Berhasil Dibuat"});
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.messsage });
  }
};

export const updateUser = async (req, res) => {
    const { nama, email, role } = req.body;
    try {
        const user = await User.findOne({
            where: {
                uuid: req.params.id,
            },
        });

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
        }

        await User.update(
            { name: nama, email: email, role: role },
            { where: { uuid: req.params.id } }
        );

        res.status(StatusCodes.OK).json({ msg: "User updated successfully" });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
};

export const deleteUser = (req, res) => {};
