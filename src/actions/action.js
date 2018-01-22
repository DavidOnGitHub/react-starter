import * as Type from './Type';

export const exampleAction = (id) => {
    return {
        type: Type.EXAMPLE_ACTION,
        id
    };
};
