export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}

export interface AuthResponse {
    data: {
        token: string;
        user?: User;
    };
}

export interface ApiError {
    data: {
        message: string;
        errors?: {
            password?: string;
            username?: string;
        };
    };
}



export interface News {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    category: string;
    image_url: string;
}

export interface Weather {
    id: string;
    content: string;
    date: Date;
    city: string;
    country: string;
    temprature: string;
}

export type RootStackParamList = {
    Splash: undefined;
    MainTabs: undefined;
    Register: undefined;
    Login: undefined;
    Profile: undefined;
    Home: undefined;
    BookDetail: { id?: string };
  };