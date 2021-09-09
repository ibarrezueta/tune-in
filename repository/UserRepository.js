import connectToDatabase from '../lib/mongodb';
var mongo = require('mongodb');

export const saveUserInfo = async (userInfo) => {
    const connection = await connectToDatabase;
    const db = connection.db('usersdb');
    const id = await db
        .collection('usersdb')
        .insertOne(userInfo);
    return id;
};

export const getUsersByEmail = async (email) => {
    const connection = await connectToDatabase;
    const db = connection.db('usersdb');
    const users = await db
        .collection('usersdb')
        .find({email: email})
        .limit(20)
        .toArray();
    return users;
};

export const updateEmailValidationStatusForUser = async (userId) => {
    const connection = await connectToDatabase;
    const db = connection.db('usersdb');
    var o_id = new mongo.ObjectID(userId);
    const newEmailStatus = { $set: {emailValidated: true } };
    const user = await db
        .collection('usersdb')
        .updateOne({_id: o_id}, newEmailStatus);
    return user;
};

export const getUserById = async (userId) => {
    const connection  = await connectToDatabase;
    const db = connection.db('usersdb');
    var o_id = new mongo.ObjectID(userId);
    const emailData = await db
        .collection('usersdb')
        .findOne({_id: o_id});
    return emailData;
};

export const getAllUsers = async () => {
    const connection  = await connectToDatabase;
    const db = connection.db('usersdb');
    const users = await db
        .collection('usersdb')
        .find({})
        .limit(20)
        .toArray();
    return users;
};
