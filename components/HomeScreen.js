import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Header from './Header';
import CategoryNavigation from './CategoryNavigation';
import NewsCard from './NewsCard';
import TabNavigation from './TabNavigation';
import DetailBerita from './DetailBerita';
import WeatherCard from './WeatherCard'; // Komponen baru untuk menampilkan cuaca
import axios from 'axios';
import CalendarScreen from './CalendarScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('News');
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const newsData = {
    News: [
      {
        image: require('../assets/gambarNews1.jpg'),
      title: 'Perpustakaan Universitas Islam Riau Raih Akreditasi A dari Perpusnas RI, Siap Jadi Rujukan Perpustakaan Se Nasional',
      description: 'Perpustakaan Universitas Islam Riau Raih Akreditasi A dari Perpusnas RI, Siap Jadi Rujukan Perpustakaan Se Nasional',
      content: `Perpustakaan Universitas Islam Riau (UIR) berhasil meraih akreditasi A dari Perpustakaan Nasional (Perpusnas) Republik Indonesia. Pencapaian ini tertuang dalam Surat Keterangan Perpusnas dengan Nomor 9681/4.1/PPM.02/XII.2024 serta sertifikat dengan Nomor PPM.02/6108/2024 yang diterbitkan pada 3 Desember 2024.
Kepala Perpustakaan UIR, Dr. Sri Yuliani, S.Pd., M.Pd., menyampaikan bahwa keberhasilan tersebut tidak terlepas dari dukungan pimpinan UIR, kerja keras tim perpustakaan, dan kontribusi seluruh sivitas akademika UIR.

“Alhamdulillah, capaian akreditasi A bagi Perpustakaan UIR ini berkat dukungan pimpinan, kerja keras tim perpustakaan, dan sivitas UIR lainnya,” ujar Sri Yuliani dalam wawancara, Selasa (3/12/2024).
Sri Yuliani menjelaskan, berbagai persiapan telah dilakukan timnya untuk mencapai akreditasi tersebut, mulai dari pra-asesmen, penyusunan borang, hingga asesmen lapangan. Proses tersebut melibatkan koordinasi dan konsultasi dengan berbagai pihak yang kompeten di bidang keperpustakaan.
“Dengan capaian akreditasi ini, menjadi tanggung jawab baru bagi kami di Perpustakaan UIR untuk mempertahankan kualitas serta terus meningkatkan pelayanan, khususnya menjelang akreditasi berikutnya lima tahun mendatang,” tambahnya.

Dalam dua tahun terakhir, Perpustakaan UIR kerap menjadi rujukan dan tempat benchmarking bagi perpustakaan tingkat kabupaten dan kota di wilayah Riau. Dengan raihan akreditasi A ini, Sri Yuliani optimis dapat menjadikan Perpustakaan UIR sebagai rujukan nasional, khususnya bagi perpustakaan perguruan tinggi, dengan jangkauan yang lebih luas.(kh/hms)`,
      date: '3 Desember 2024',
      author: 'Dr. Sri Yuliani, S.Pd., M.Pd.',
      },

      {
        image: require('../assets/gambarNews2.jpg'),
        title: 'Dosen UIR Gelar Sosialisasi Integrasi Sains dan Nilai Islam di MAN 2 Model Pekanbaru',
        description: 'Pusat Bahasa UIR Menjadi Fasilitator Pelaksanaan Tes Berbahasa Jepang Bagi lebih dari 120 Peserta',
        content: `Tidak hanya sebagai tempat menimba ilmu bagi para mahasiswa, Universitas Islam Riau (UIR) sebagai salah satu Perguruan Tinggi Swasta (PTS) di Pekanbaru melalui Pusat Bahasa menjadi fasilitator tes kemampuan berbahasa Jepang dasar bagi sekitar 128 peserta, yang dilaksanakan pada Minggu (03/11/2024) di Auditorium Fakultas Hukum UIR.
  
  Pusat bahasa UIR dipercaya menjadi fasilitator pelaksanaan tes kompetensi bahasa Jepang untuk para Job Seeker sebagai salah satu syarat utama untuk menjadi pekerja asal Indonesia di negara Tirai Bambu, Jepang. Pusat Bahasa UIR dipercaya oleh JLCT atau Japanese Languange Capability Test, salah satu lembaga tes bahasa Jepang terkemuka.
  “Dengan adanya kolaborasi ini berarti UIR khususnya Pusat Bahasa dipercaya oleh publik sangat kapabel untuk melaksanakan berbagai tes dan kompetensi berbahasa, sekaligus sebagai langkah promosi UIR kepada publik untuk penerimaan mahasiswa baru,” ujar Shalawati, S.Pd.I., M.Tesol., Kepala Pusat Bahasa UIR.
  
  Adapun informasi yang dihimpun oleh Humas UIR dari Kepala Pusat Bahasa UIR bahwa terdapat tiga kriteria penilaian dalam JLPT N5 (Japanese Language Proficiency Test) atau dalam bahasa Jepangnya disebut Nihongo Nouryoku Shiken seperti kemampuan penghapalan kosakata, membaca dan mendengarkan tingkat dasar.
  
  Lebih lanjut, dengan terlaksananya tes bahasa Jepang ini, UIR menunjukkan komitmen untuk mendukung tenaga kerja Indonesia yang siap bersaing di pasar internasional, terutama di Jepang. Shalawati menambahkan pelaksanaan tes tersebut menjadi motivasi bagi para mahasiswa untuk giat mempelajari bahasa asing serta bentuk keyakinan publik dan menambah daftar tes bahasa asing yang dapat UIR akomodir, dalam rangka UIR menuju Visi 2041 Menjadi Universitas Islam Berkelas Dunia Berbasis Iman dan Takwa.(kh/hms)`,
        date: '5 Desember 2024',
        author: 'Dr. Ahmad, Rektor UIR',
      },

      {
        image: require('../assets/gambarNews3.jpg'),
        title: 'UIR Raih Gold Winner Anugerah Diktisaintek 2024: Bukti Keunggulan Kerja Sama Industri di Kancah Nasional',
        description: 'Sosialisasi tentang pentingnya menjaga lingkungan hidupTidak bosan-bosannya Universitas Islam Riau (UIR) terus mengukir prestasi. Baru – baru ini dalam gelaran Anugerah Diktisaintek 2024 UIR berhasil raih Gold Winner kategori Perguruan.',
        content: `Tidak bosan-bosannya Universitas Islam Riau (UIR) terus mengukir prestasi. Baru – baru ini dalam gelaran Anugerah Diktisaintek 2024 UIR berhasil raih Gold Winner kategori Perguruan Tinggi Swasta dengan sub kategori Perguruan Tinggi Dengan Kerja Sama Industri Terbaik se Indonesia. Penghargaan tersebut langsung diterima oleh Wakil Rektor Bidang Kemahasiswaan, Alumni, Kerjasama dan Dakwah Islamiyah, Assoc. Prof. Dr. Admiral, S.H., M.H. langsung dari Jakarta pada Jumat (13/12/2024)
  
  UIR berhasil meraih Gold Winner dalam sub kategori Kerjasama Industri Terbaik tidak lepas dari dukungan stakeholder atau pemangku kepentingan yang menjadi mitra kerjasama kampus yang sudah berdiri sejak 1962 ini. Dengan berbagai prasyarat diantaranya dukungan pimpinnan PT, kualitas perencanaan kerjasama yang baik, bentuk dan capaian kerjasama rentang waktu 2023 – 2024, serta contoh konkret dari dokumen hingga pemberitaan terhadap kerjasama yang terdata dengan baik maka berhasil menghantarkan UIR dapatkan anugerah tersebut.
  
  Assoc. Prof. Dr. Rendi Prayuda, S.IP., M.Si., selaku Kepala Badan Kerjasama Urusan Internasional (BKUI) UIR mengaku proses yang dilalui sangat kompetitif yang sudah dilalui sejak Oktober lalu, mulai dari pengumpulan dokumen, proposal hingga presentasi langsung oleh Rektor didepan para Juri dari Kementerian Tinggi Sains dan Teknologi bersama 10 PTS lainnya se Indonesia.
  
  “Dengan persiapan yang telah kita lakukan sejak Oktober lalu berupa pengajuan proposal sebagai syarat utama, maka didapatlah 10 PTS se Indonesia yang berhasil lolos untuk tahap selanjutnya  yaitu presentasi oleh pimpinan PT, Rektor UIR saat itu melalui daring menyampaikan presentasi terhadap proposal yang telah kita ajukan, keberhasilan UIR raih Gold Winner dalam kategori ini tidak lepas dari dukungan berbagai pihak baik stakeholder eksternal seperti mitra kerja tetapi juga sivitas akademika UIR serta YLPI Riau,” ujar Rendi Prayuda.
  
  Dalam kesempatan berbeda Rektor UIR Prof. Dr. H. Syafrinaldi, S.H., MCL., menyampaikan apresiasi kepada tim serta seluruh sivitas yang saling berkontribusi dan menyumbang pelaporan kerjasama yang baik serta teraplikasi dengan berbagai implementasi kerjasama yang sarat nilai akademis dan sangat berdampak bagi sivitas UIR sendiri, juga kepada pemangku kepentingan itu sendiri.
  
  “Selamat atas raihan prestasi yang berhasil UIR raih di penghujung tahun ini, prestasi ini tentu tidak lepas dari dukungan berbagai pihak baik dari tim BKUI sivitas dan pimpinan fakultas dan rektorat, YLPI Riau hingga stakeholder,”ungkapnya.
  
  Anugerah Diktisaintek 2024 merupakan apresiasi bagi pemangku kepentingan dan perguruan tinggi, LLDIKTI, mitra Kementerian, dunia usaha, industri, jurnalis dan media atas kinerja kontribusi dalam transformasi pendidikan tinggi di tanah air. Berhasil diraihnya Gold Winner dalam sub kategori perguruan tinggi dengan kerja sama industri terbaik menjadi bukti bahwa UIR tidak hanya unggul dalam impelentasi akademis, tetapi juga mampu membangun sinergi yang berdampak nyata bagi pengembangan pendidikan tinggi di Indonesia. Prestasi ini semakin mengukuhkan UIR sebagai kampus yang terpercaya, profesional, dan berkomitmen untuk terus memberikan kontribusi terbaik dalam dunia pendidikan dan kemitraan strategis.(kh/hms)`,
        date: '10 Desember 2024',
        author: 'humas admin_berita',
      },
     
    ],
    Pendidikan: [
      {
        image: require('../assets/pendidikan1.jpg'),
        title: 'UIR Terima Beasiswa Biaya Pendidikan untuk 15 Mahasiswa dari BNI',
        description: 'Bank Negara Indonesia (BNI) memberikan dukungan kepada Universitas Islam Riau (UIR) melalui program beasiswa biaya pendidikan sebesar 52 Juta Rupiah.',
        content: `Bank Negara Indonesia (BNI) memberikan dukungan kepada Universitas Islam Riau (UIR) melalui program beasiswa biaya pendidikan sebesar 52 Juta Rupiah. Penyerahan beasiswa berlangsung pada Jumat (27/12/2024) di Ruang Sidang Gedung H. Rawi Kunin UIR dihadiri oleh perwakilan BNI dan sivitas akademika UIR.

Dalam acara tersebut perwakilan BNI Riko Febrindo, yang menjabat sebagai Business Branch Manager, menyampaikan harapannya agar bantuan pendidikan ini dapat membantu mahasiswa UIR dalam pembiayaan pendidikan mereka.

“Kami berharap dengan bantuan pendidikan yang diberikan oleh BNI, adik-adik mahasiswa sekalian dapat terbantu dalam pembiayaan pendidikannya. Bagi UIR, semoga sinergitas yang terjalin ini dapat terus berkembang, tidak hanya dalam pembiayaan pendidikan tetapi juga dalam pembiayaan keuangan lainnya di UIR,” ujar Riko.

Rektor UIR, Prof. Dr. rer. pol. H. Syafrinaldi, S.H., M.C.L., dalam sambutannya mengucapkan terima kasih dan apresiasi kepada BNI atas perhatian yang diberikan, khususnya terkait bantuan pendidikan.

“Terima kasih dan syukur kami ucapkan kepada BNI yang telah memberikan beasiswa kepada mahasiswa/i kami. Dengan seleksi yang tepat dan objektif, kami doakan perhatian ini membawa kebaikan dan kesuksesan kembali kepada BNI,” ungkapnya.

Penyerahan beasiswa dilakukan secara simbolis oleh Riko Febrindo kepada Rektor UIR, disaksikan oleh sejumlah pejabat dari BNI Pekanbaru, termasuk Nando Dwi Saputra (Sub Branch Manager), Maya Riani (Business Team Leader), Andi Saputra (Customer Transaksional), dan Yulianda Putri (Customer Transaksional). Sebanyak 15 mahasiswa/i UIR berhasil lolos dalam seleksi penerima beasiswa BNI yang di lakukan oleh Direktorat Layanan Mahasiswa dan Akademik (DLMA) serta didistribusikan menjadi pembiayaan perkuliahan mahasiswa.

Dari pihak UIR, acara ini dihadiri oleh Wakil Rektor I Assoc. Prof. Dr. Syafhendry, M.Si., Wakil Rektor II Assoc. Prof. Dr. Firdaus AR, S.E., M.Si., Ak., CA., Wakil Rektor III Dr. Admiral, S.H., M.H., serta segenap sivitas akademika lainnya. Kegiatan ini juga diisi dengan diskusi dan ramah tamah yang dipandu oleh Kepala Biro Administrasi Keuangan, Dr. Azwirman, S.Ak., M.Acc.(kh/hms)`,
        date: 'Desember 30, 2024',
        author: 'humas admin_berita',
      },
      {
        image: require('../assets/pendidikan2.jpg'),
        title: 'Dua Mahasiswa UIR Boyong 4 Medali Pada Kejuaraan Karate UNESA Rektor Cup di Surabaya',
        description: 'Prestasi membanggakan kembali diraih oleh sivitas Universitas Islam Riau (UIR). Dua mahasiswa UIR berhasil memboyong empat medali yaitu 1 Emas, 1 Perak dan 2 Perunggu dalam kejuaraan Internasional Karate UNESA Rector Cup II',
        content: `Prestasi membanggakan kembali diraih oleh sivitas Universitas Islam Riau (UIR). Dua mahasiswa UIR berhasil memboyong empat medali yaitu 1 Emas, 1 Perak dan 2 Perunggu dalam kejuaraan Internasional Karate UNESA Rector Cup II yang berlangsung pada Minggu 29 Desember 2024 di Surabaya Jawa Timur.

Adapun dua delegasi atlet yang berhasil raih medali dalam kejuaraan tersebut diantaranya Mulia Ade Raidlin Paramitha mahasiswi program studi (prodi) Pendidikan Jasmani FKIP, sementara Muhammad Fikri mahasiswa prodi Ilmu Hukum, Fakultas Hukum UIR.

Dr. Raffly Henjilito, M.Pd selaku Ofiicial dan pendamping kedua atlet tersebut mengaku persiapan yang dilakukan kedua atlet cukup intens digelar selama empat bulan terakhir. Ucapan terima kasih kepada jajaran pimpinan baik ditingkat fakultas hingga ke Rektorat atas kepercayaan maupun dukungan yang diberikan kepada atlet selama persiapan hingga keberangkatan.

“Alhamdulillah dua atlet UIR berhasil mendapatkan empat medali dari kejuaraan karate di UNESA Surabaya, tentu keberhasilan atlet tiak lepas dari dukungan pimpinan baik di tingkat fakultas hingga Rektorat yaitu Dekan, Wakil Rektor dan Rektor, memberikan dukungan serta kepercayaan mulai dari persiapan hingga keberangkatan,” ujar Raffly dalam wawancara kepada Tim Humas pada Senin (30/12/2024).

Lebih lanjut, Raffly berharap dengan prestasi yang berhasil diraih oleh Mulia Ade Raidlin dan Muhammad Fikri menjadi pemantik semangat bagi keduanya tetapi juga mahasiswa UIR lainnya untuk aktif menyumbangkan medali dalam berbagai kejuaraan olahraga di tahun 2025 mendatang.(kh/hms)`,
        date: 'Desember 30, 2024',
        author: 'humas admin_berita',
      },
      {
        image: require('../assets/pendidikan3.jpg'),
        title: 'Delegasi Universitas Islam Riau Sukses Berpartisipasi dalam GARIIF24 di IIUM Malaysia',
        description: 'Universitas Islam Riau (UIR) melalui Direktorat Dakwah Islam Kampus (DDIK) berpartisipasi dengan mengikuti The Global Arabic Islamic Annual Festival (GARIIF24)',
        content: `Universitas Islam Riau (UIR) melalui Direktorat Dakwah Islam Kampus (DDIK) berpartisipasi dengan mengikuti The Global Arabic Islamic Annual Festival (GARIIF24) yang berlangsung pada 16-20 Desember 2024 di International Islamic University Malaysia (IIUM).

Dipimpin oleh Direktur DDIK, Assoc. Prof. Dr. Anton Afrizal Candra, S.Ag., M.Si., beserta Sekretaris DDIK, Ary Antony Putra, S.Pd.I., M.A., serta Dr. Rojja Pebrian, Lc., M.A., dari Fakultas Agama Islam (FAI). Selain itu, enam mahasiswa UIR terpilih juga menjadi bagian dari delegasi, membawa misi akademik dan budaya.

Selama lima hari penyelenggaraan, delegasi UIR mengikuti berbagai kegiatan internasional, termasuk presentasi poster hasil penelitian, Arabic Public Speaking, dan Lailah Tsaqafiyah (Malam Penampilan Kebudayaan Islami). Dalam kompetisi poster, empat karya mahasiswa UIR berhasil meraih penghargaan medali perak (Silver Medal), mencerminkan keunggulan akademik dan kreativitas mahasiswa di pentas global.

“Partisipasi UIR dalam GARIIF24 bukan hanya untuk mencetak prestasi, tetapi juga untuk memperkuat citra UIR sebagai perguruan tinggi Islam yang kompetitif di tingkat internasional. Melalui kegiatan ini, kami berharap mahasiswa UIR semakin siap menghadapi tantangan global, khususnya dalam dakwah Islam dan kolaborasi lintas negara.” Ungkap Anton Afrizal Candra dalam wawancara dengan Tim Humas UIR pada Selasa (24/12/2024).

Pada sesi malam kebudayaan, delegasi mahasiswa UIR mempersembahkan drama berjudul Malin Kundang yang diadaptasi ke dalam bahasa Arab. Penampilan ini mendapat apresiasi luar biasa dari para peserta dan penyelenggara, bahkan dinobatkan sebagai salah satu pementasan terbaik dalam acara tersebut.(kh/hms)

`,
        date: 'Desember 24, 2024',
        author: 'humas admin_berita',
      },

    ],

  };

  // Fungsi untuk mengambil data cuaca
  const fetchWeatherData = async () => {
    const apiKey = 'e571c522b4903ec3fbdc23b05abdb84c'; // Ganti dengan API key Anda
    const city = 'Pekanbaru'; // Ganti dengan kota yang diinginkan
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setLoadingWeather(false);
    } catch (error) {
      console.error(error);
      setLoadingWeather(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

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
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DetailBerita" component={DetailBerita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    padding: 10,
  },
});

export default HomeScreen;
