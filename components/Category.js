return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {({ navigation }) => (
            <View style={styles.container}>
              <Header />
              
              <CategoryNavigation
                selectedCategory={selectedCategory}
                onCategoryPress={setSelectedCategory}
              />
              <ScrollView style={styles.cardContainer}>
                {selectedCategory === 'Prakiraan Cuaca' ? (
                  loadingWeather ? (
                    <Text>Loading weather data...</Text>
                  ) : (
                    <WeatherCard weather={weatherData} />
                  )
                ) : (
                  newsData[selectedCategory].map((news, index) => (
                    <NewsCard
                      key={index}
                      news={news}
                      onPress={() => navigation.navigate('DetailBerita', { news })}
                    />
                  ))
                )}
              </ScrollView>
              <TabNavigation navigation={navigation} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DetailBerita" component={DetailBerita} />
      </Stack.Navigator>
    </NavigationContainer>
  );