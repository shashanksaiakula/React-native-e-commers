import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from './MyStack';


// export type StackNavigationProps = NativeStackScreenProps<StackParamList>;
export type StackNavigationProps = NativeStackNavigationProp<StackParamList>;
