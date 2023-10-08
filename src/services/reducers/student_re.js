import { Add, Delete, Edit, Update } from "../actionsType/student_actionType";

const initailState = ({
    students: [],
    student: null,
    isLoad: false,
    isIndex: null
})


const stu_Re = (state = initailState,action) =>{

    switch (action.type) {
        case Add:
            return{
                ...state,
                students: ([...state.students, action.payload])            
            }
            // const ne_data = [action.payload]
            break;
        
        case Edit:
            return{
                ...state,
                student: action.payload.data,
                isIndex: action.payload.index
            }
            break;

        case Update:

            let stu = state.students;

            stu[action.payload.index] = action.payload.data;

            return{
                ...state,
                students: stu,
                student: null,
                isIndex: null
            }
            break;

        case Delete:

            let de_data = state.students;

            let delete_re = de_data.filter((del) =>{
                return del.id != action.payload;
            })

            return{
                ...state,
                students: delete_re
            }

            
        default:
            return state;
            break;
    }
}

export default stu_Re;