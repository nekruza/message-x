import { createRandomUser } from "../data/userData";

export default function reducer(state = createRandomUser(), action) {
    return state;
};