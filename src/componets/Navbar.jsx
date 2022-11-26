import {Text, View} from 'react-native';
import BackButton from './button/BackButton';

const Navbar = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
      }}>
      <BackButton />
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          fontWeight: '500',
          marginLeft: 25,
          position: 'relative',
          top: -4,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Navbar;
