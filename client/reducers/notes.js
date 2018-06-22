import {ADD_NOTE} from "../actions/dasboardActions";

const initialState = [{
    title: 'Note 1',
    text: 'Some text'
}];

export default function noteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, {
                title: 'Additional Note', text: 'Some text'
            }];
    }

    return state;
}