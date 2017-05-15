/**
 * Created by rodov on 3/19/2017.
 */
interface Reducer<T> {
    (state: T,
     action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
    return state;
};