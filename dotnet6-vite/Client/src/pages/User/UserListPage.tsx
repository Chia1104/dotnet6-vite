import { type FC, useEffect } from 'react';
import UserList from "@chia/Components/UserList";
import { selectAllUsers } from "@chia/store/modules/User";
import { getAllUsersAsync } from "@chia/store/modules/User/actions";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import { useLocalStorage } from "usehooks-ts";

const UserListPage: FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectAllUsers);
    const [userData, setUserData] = useLocalStorage("userData", null);
    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUsersAsync(userData.accessToken));
    } , []);
    return (
        <>
            {
                users.loading === "succeeded" &&
                // @ts-ignore
                <UserList users={users.data.data} />
            }
        </>
    )
}

export default UserListPage;