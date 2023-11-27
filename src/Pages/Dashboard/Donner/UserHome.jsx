
import Card from '../../../Components/Cart';
import { TypeAnimation } from 'react-type-animation';
import Context from '../../../Hooks/useContext';

const UserHome = () => {
    const {user}=Context()
    return (
        <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        <TypeAnimation
          sequence={[
            // 'arman',
            user?.displayName ? user.displayName : "Back",
            1000
        ]}
          speed={1}
          repeat={Infinity}
          style={{ fontSize: "1em" }}
        />
      </h2>
            <Card></Card>
        </div>
    );
};

export default UserHome;