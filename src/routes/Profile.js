import { authService } from "fbase"; 
const Profile = () => {
    const OnLogOutClick = () => authService.signOut();

    return(
        <>
        <button onClick={OnLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;