import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../assets/styles/signup.styles";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSignup = () => {

    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>BookWorm</Text>
                        <Text style={styles.subtitle}>Share your favorite reads</Text>
                    </View>

                    <View style={styles.formContainer}>
                        {/* USERNAME */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Username</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="person-outline"
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="John Doe"
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={username}
                                    onChangeText={setUsername}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* EMAIL */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="mail-outline"
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="jonhdoe@mail.com"
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* PASSWORD */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="******"
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                />

                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Ionicons
                                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                                        size={20}
                                        color={COLORS.primary}
                                        style={styles.inputIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={handleSignup}
                            style={styles.button}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.buttonText}>Sign Up</Text>
                            )}
                        </TouchableOpacity>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Already have an account? </Text>

                            <TouchableOpacity onPress={() => router.back()}>
                                <Text style={styles.link}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}