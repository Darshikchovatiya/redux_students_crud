import { Add, Delete, Edit, Update } from "../actionsType/student_actionType"

export const Stude_ac = (data) =>{
    return{
        type: Add,
        payload: data
    }
}

export const Single_stu = (data,index) =>{
    return{
        type: Edit,
        payload: {data, index}
    }
}

export const Update_stu = (data, index) =>{
    return{
        type: Update,
        payload: {data, index}
    }
}

export const Delete_stu = (id) =>{
    return{
        type: Delete,
        payload: id
    }
}