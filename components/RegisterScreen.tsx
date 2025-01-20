import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Portal, Dialog, Paragraph, Button as PaperButton } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Input from '../components/Input';
import Button from '../components/Button';
import { register } from '../service/api';
import { RootStackParamList } from '../types';

const RegisterScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const handleRegister = async () => {
        setLoading(true);
        try {
            await register(username, password, email);
            setDialogMessage('Registration successful!');
            setVisible(true);
        } catch (error: any) {
            console.error('Failed to register:', error.message);
            setDialogMessage('Registration failed. Please try again.');
            setVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const handleDialogDismiss = () => {
        setVisible(false);
        if (dialogMessage.includes('successful')) {
            navigation.navigate('Login');
        }
    };

    return (
        <LinearGradient
            colors={['#6a11cb', '#2575fc']}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Create Account</Text>
                <Input
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                    leftIcon={<MaterialIcons name="person" size={20} color="#666" />}
                />
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    leftIcon={<MaterialIcons name="email" size={20} color="#666" />}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    leftIcon={<MaterialIcons name="lock" size={20} color="#666" />}
                />
                <Button
                    title={loading ? 'Registering...' : 'Register'}
                    onPress={handleRegister}
                    disabled={loading}
                    style={styles.registerButton}
                    icon={<MaterialIcons name="person-add" size={20} color="#fff" />}
                />
                <Portal>
                    <Dialog visible={visible} onDismiss={handleDialogDismiss}>
                        <Dialog.Title>{dialogMessage.includes('successful') ? 'Success' : 'Error'}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>{dialogMessage}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <PaperButton onPress={handleDialogDismiss}>OK</PaperButton>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#fff',
    },
    input: {
        backgroundColor: 'black',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    registerButton: {
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 25,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RegisterScreen;