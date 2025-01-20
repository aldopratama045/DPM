import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Portal, Dialog, Paragraph, Button as PaperButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../components/Input";
import Button from "./Button";
import { login } from "../service/api";
import { setAuthToken } from "../util/auth";
import { AuthResponse, ApiError } from "../types";

type RootStackParamList = {
	MainTabs: undefined;
	Register: undefined;
};

const LoginScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [visible, setVisible] = useState(false);
	const [dialogMessage, setDialogMessage] = useState("");

	const handleLogin = async () => {
		if (!username || !password) {
			setDialogMessage("Please fill in all fields");
			setVisible(true);
			return;
		}

		setLoading(true);
		try {
			const response = (await login(username, password)) as AuthResponse;
			await setAuthToken(response.data.token);
			navigation.reset({
				index: 0,
				routes: [{ name: "MainTabs" }],
			});
		} catch (error: any) {
			const apiError = error as ApiError;
			const errorMessage = apiError.data?.message || "Something went wrong";
			const errors = apiError.data?.errors;
			console.log("Error details:", errors);
			const passwordError = errors?.password;
			const usernameError = errors?.username;
			setDialogMessage(
				passwordError
					? `${errorMessage}: ${passwordError}`
				: usernameError
				? `${errorMessage}: ${usernameError}`
				: errorMessage
			);
			setVisible(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<LinearGradient
			colors={["#6a11cb", "#2575fc"]}
			style={styles.gradientContainer}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Welcome Back</Text>
				<Text style={styles.subtitle}>Login to your account</Text>
				<Input
					placeholder="Username"
					value={username}
					onChangeText={setUsername}
					style={styles.input}
					leftIcon={<MaterialIcons name="person" size={20} color="#666" />}
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
					title={loading ? "Logging in..." : "Login"}
					onPress={handleLogin}
					disabled={loading}
					style={styles.loginButton}
					icon={<MaterialIcons name="login" size={20} color="#fff" />}
				/>
				<TouchableOpacity
					style={styles.registerLink}
					onPress={() => navigation.navigate("Register")}
				>
					<Text style={styles.registerText}>Don't have an account? Register</Text>
				</TouchableOpacity>
				<Portal>
					<Dialog visible={visible} onDismiss={() => setVisible(false)}>
						<Dialog.Title>Error</Dialog.Title>
						<Dialog.Content>
							<Paragraph>{dialogMessage}</Paragraph>
						</Dialog.Content>
						<Dialog.Actions>
							<PaperButton onPress={() => setVisible(false)}>OK</PaperButton>
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
		justifyContent: "center",
		padding: 16,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 10,
		textAlign: "center",
		color: "#fff",
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 30,
		textAlign: "center",
		color: "#d3d3d3",
	},
	input: {
		backgroundColor: "#fff",
		borderRadius: 25,
		padding: 10,
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	loginButton: {
		marginTop: 20,
		backgroundColor: "#4CAF50",
		borderRadius: 25,
		paddingVertical: 15,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	registerLink: {
		marginTop: 15,
		alignItems: "center",
	},
	registerText: {
		color: "#d3d3d3",
		textDecorationLine: "underline",
	},
});

export default LoginScreen;