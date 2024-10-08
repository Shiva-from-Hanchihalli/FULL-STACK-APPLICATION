import User from '../model/userModel.js';

export const create = async (req, res) => {
    try {
        const newUser = new User(req.body); 
        const { email } = newUser; 

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ errorMessage: "User Already Exists" });
        }
        const savedData = await newUser.save();
        // res.status(201).json(savedData); 
        res.status(200).json({ message:" User created Successfully"}); 
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};


export const  getAllUsers = async(req , res)=>{
    try{ 
        const userData = await User.find();
        if (!userData || userData.length === 0) {
            return res.status(404).json({ errorMessage: "User Data not Found" });
        }
        res.status(201).json(userData); 
    }
    catch(error){
        res.status(500).json({ errorMessage: error.message });

    }
};


export const getUserById =async(req , res)=>{
    try {
        const id = req.params.id.trim();
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({ errorMessage: "User not Found" });
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });

    }
};


export const update = async(req , res)=>{
    try{
        const id = req.params.id.trim();
        const userExist = await User.findById(id);
        if(!userExist){
        return res.status(404).json({ errorMessage: "User not Found" });
    }
  const updatedData = await User.findByIdAndUpdate(id, req.body,{
        new:true
    });
    // res.status(200).json(updatedData);
    res.status(200).json({ message:" User Upadted Successfully"}); 

    }   
    catch (error) {
    res.status(500).json({ errorMessage: error.message });
}
};

export const deleteUser = async(req , res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({ errorMessage: "User not Found" });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"user Deleted Successfully"});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
