  *   * Solidity
  * GitHub'da Düzenle


# Solidity
Uyarı
You are reading a community translation of the Solidity documentation. The Solidity team can give no guarantees on the quality and accuracy of the translations provided. The English reference version is and will remain the only officially supported version by the Solidity team and will always be the most accurate and most up-to-date one. When in doubt, please always refer to the English (original) documentation.
Solidity akıllı sözleşmelerin (smart contracts) uygulanması için geliştirilen nesne yönelimli, üst düzey bir programlama dilidir. Akıllı sözleşmeler Ethereum ağı içindeki hesapların hareketlerini ve davranışlarını yöneten programlardır.
Solidity Ethereum Sanal Makinası (ESM) (Ethereum Virtual Machine) hedeflenerek dizayn edilmiş bir curly-bracket dilidir. C++, Python ve JavaScript gibi dillerden ilham alınarak oluşturulmuştur. Solidity’nin başka hangi dillerden ilham aldığı hakkındaki detaylı bilgiyi ilham alınan diller bölümünde bulabilirsiniz.
Solidity statik olarak yazılmış olmasının yanı sıra, kütüphaneleri, kullanıcı tanımlı karmaşık türleri ve kalıtımsallığı destekler.
Solidity’le kullanıcılar için oylama, crowdfunding, blind auctions ve çoklu-imza cüzdanları gibi kullanımlara yönelik akıllı sözleşmeler oluşturabilirsiniz.
Sözleşmelerin gönderimini yaparken, en son yayınlanan Solidity sürümünü kullanmalısınız. İstisnai durumlar dışında, yalnızca son sürüm güvenlik düzeltmeleri güncellemelerini alır. Ayrıca, önemli değişikliklerinin yanı sıra yeni özellikler düzenli olarak tanıtılmaktadır. Bu hızlı değişimleri belirtmek için bir 0.y.z sürüm numarası kullanıyoruz.
İpucu
Solidity kısa bir süre önce birçok yenilik ve önemli değişiklikler getiren 0.8.x sürümünü yayınladı. Değişiklikleri mutlaka okuyun tam liste.
Solidity’yi veya bu dokümantasyonu geliştirmek için fikirlere her zaman açığız, Daha fazla ayrıntı için katkıda bulunanlar rehberi sayfamızı okuyun.
Uyarı
Bu belgeyi, sol alt köşedeki sürümler menüsüne tıklayarak ve tercih edilen indirme biçimini seçerek PDF, HTML veya Epub olarak indirebilirsiniz.
## Hadi Başlayalım
**1. Akıllı Sözleşmelerin Temellerini Anlama**
Eğer akıllı sözleşmeler kavramında yeniyseniz “Akıllı Sözleşmelere Giriş” bölümünü araştırarak başlamanızı öneririz. Bu bölüm aşağıdakileri kapsar:
  * Solidity ile yazılmış Basit bir akıllı sözleşme örneği.
  * Blockchain Temelleri.
  * Ethereum Sanal Makinası (Ethereum Virtual Machine).


**2. Solidity ile Tanışın**
Temel bilgilere alıştıktan sonra, “Örneklerle Solidity” bölümünü okumanızı öneririz. Ve ayrıca “Dil Tanımları” bölümünü inceleyerek dilin temel kavramlarını anlayabilirsiniz..
**3. Solidity Derleyicisini İndirme**
Solidity derleyicisini indirmenin birçok yolu vardır, tercih edeceğiniz yola göre indirme sayfası ‘da bulunan adımları izleyin.
İpucu
Remix IDE ile birlikte kod örneklerini doğrudan tarayıcınızda deneyebilirsiniz. Remix, Solidity’yi yerel olarak yüklemenize gerek kalmadan Solidity akıllı sözleşmelerini yazmanıza, dağıtmanıza ve yönetmenize olanak tanıyan web tarayıcısı tabanlı bir IDE’dir.
Uyarı
İnsanlar kodlama yaparken, hataları olabilir. Akıllı sözleşmelerinizi yazarken belirlenmiş en iyi yazılım geliştirme uygulamalarını izlemelisiniz. Buna kod incelemesi, kodunuzu test etme, denetimler ve correctness proofs dahildir. Akıllı sözleşme kullanıcıları bazen kod konusunda yazarlarından daha emin olabilirler, blockchain ve akıllı sözleşmelerin dikkat edilmesi gereken kendine özgü sorunları vardır, bu nedenle üretim kodu(production code) üzerinde çalışmadan önce Güvenlikle İlgili Değerlendirmeler bölümünü okuduğunuzdan emin olun.
**4. Daha Fazla Bilgi Edinin**
Ethereum ağı üzerinde merkeziyetsiz uygulamalar oluşturma hakkında daha fazla bilgi edinmek istiyorsanız, Ethereum Geliştirici Kaynakları size Ethereum ile ilgili daha fazla genel dokümantasyon, çok çeşitli öğreticiler, araçlar ve framework’ler(Yazılım iskeleti) konusunda yardımcı olabilir.
Eğer herhangi bir sorunuz varsa, Ethereum StackExchange, veya Gitter kanalımıza sorabilirsiniz.
## Çeviriler
Topluluk’tan bazı gönüllüler bu belgeyi farklı dillere çevirmemize yardımcı oluyor. Bu sebeple çevirilerin farklı derecelerde bütünlük ve güncelliğe sahip olduğunu unutmayın. İngilizce versiyonunu referans olarak alın.
Sol alt köşedeki açılır menüye tıklayarak ve tercih ettiğiniz dili seçerek diller arasında geçiş yapabilirsiniz.
  * Fransızce
  * Endonezya Dili
  * Farsça
  * Japonca
  * Korece
  * Çince


Not
Kısa süre önce topluluk çalışmalarını kolaylaştırmak ve düzene koymak için yeni bir GitHub organizasyonu ve çeviri için bir iş akışı(workflow) kurduk. Yeni bir dile nasıl başlayacağınız veya var olan çevirilere nasıl katkıda bulunacağınız hakkında bilgi için lütfen çeviri kılavuzuna bakın.
# İçindekiler
Anahtar Kelime Dizini, Arama Sayfası
Temeller
  * Akıllı Sözleşmelere Giriş
    * Basit Bir Akıllı Sözleşme
    * Blok Zinciri Temelleri
    * Ethereum Sanal Makinası
  * Solidity Derleyicisini Yükleme
    * Sürüm
    * Remix
    * npm / Node.js
    * Docker
    * Linux Paketleri
    * macOS Paketleri
    * Statik Binaryler
    * Kaynağından Kurulum
    * CMake Ayarları
    * Sürüm Dizgisi (String) Detayları
    * Sürümleme Hakkında Önemli Bilgi
  * Solidity by Example
    * Oylama
    * Gizli İhale
    * Güvenli Uzaktan Alışveriş
    * Mikro Ödeme Kanalı
    * Modüler Kontratlar


Dil Açıklaması
  * Solidity Kaynak Dosyasının Düzeni
    * SPDX Lisans Tanımlayıcısı
    * Pragmalar
    * Diğer Kaynak Dosyalarını İçe Aktarma
    * Yorumlar
  * Bir Sözleşmenin Yapısı
    * Durum Değişkenleri
    * Fonksiyonlar
    * Fonksiyon Değiştiriciler (Modifier’lar)
    * Olaylar (Event)
    * Hatalar
    * Yapı (Struct) Tipleri
    * Enum Tipleri
  * Türler
    * Değer Türleri
    * Referans Türleri
    * Eşleme Türleri
    * Operatörler
    * Temel Türler Arası Dönüşümler
    * İfadeler (Literals) ve Temel Türler Arasındaki Dönüşümler
  * Birimler ve Global Olarak Kullanılabilir Değişkenler
    * Ether Birimleri
    * Zaman Birimleri
    * Özel Değişkenler ve Fonksiyonlar
    * Reserved Keywords
  * İfadeler ve Kontrol Yapıları
    * Kontrol Yapıları
    * Fonksiyon Çağrıları
    * `new` Yoluyla Sözleşmeler Oluşturma
    * İfadelerin Değerlendirme Sırası
    * Atama
    * Kapsam Belirleme ve Beyanlar
    * Checked veya Unchecked Matematiksel İşlemler
    * Hata İşleme: Assert, Require, Revert ve Exceptionlar
  * Akıllı Sözleşmeler
    * Akıllı Sözleşme Oluşturma
    * Görünürlük ve Getter Fonksiyonlar
    * Fonksiyon Modifier’ları
    * Constant ve Immutable State Değişkenleri
    * Fonksiyonlar
    * Eventler
    * Hata ve Geri Alma Durumları
    * Kalıtım
    * Abstract Akıllı Sözleşmeler
    * Interface’ler
    * Kütüphaneler
    * Using For
  * Inline Assembly
    * Örnek
    * Dış(External) değişkenlere, fonksiyonlara ve kütüphanelere erişim
    * Kaçınılacak Şeyler
    * Solidity kuralları
  * Kopya Kağıdı
    * Operatörlerin Öncelik Sırası
    * Global Değişkenler
    * Fonksiyon Görünürlük Belirteçleri
    * Modifiers
  * Dilbilgisi (Language Grammar)


Derleyici
  * Derleyicinin Kullanımı
    * Komut Satırı Derleyicisinin Kullanımı
    * EVM Sürümünün Hedefe Ayarlanması
    * Derleyici JSON Girdisi ve Çıktısı Tanımı
    * Derleyici Araçları
  * Analysing the Compiler Output
  * Solidity IR-based Codegen Changes
    * Semantic Only Changes
    * Internals


Dahili
  * Depolama Alanındaki Durum Değişkenlerinin Düzeni
    * Mapping’ler ve Dinamik Diziler(Arrays)
    * JSON Çıktısı
  * Bellekteki Düzen
    * Depolama Düzeni Farklılıkları
  * Çağrı Verilerinin Düzeni
  * Değişkenlerin Temizlenmesi
  * Kaynak Eşlemesi
  * Optimize Edici
    * Solidity Kodunu Optimize Etmenin Faydaları
    * Optimize Edilmiş ve Optimize Edilmemiş Kod Arasındaki Farklar
    * Optimize Edici Parametre Çalıştırmaları
    * Opcode Tabanlı Optimize Edici Modülü
    * Yul Tabanlı Optimize Edici Modülü
  * Sözleşme Meta Verisi
    * Meta Veri Hash’inin Bayt Kod İçinde Kodlanması
    * Otomatik Arayüz Oluşturmanın Kullanılması ve NatSpec
    * Kaynak Kodu Doğrulama için Kullanım
  * Sözleşme ABI Spesifikasyonu
    * Temel Tasarım
    * Function Selector (Function Selector)
    * Argüman Şifreleme
    * Tipler (Types)
    * Şifreleme için Tasarım Kriterleri
    * Şifrelemenin Formal Spesifikasyonu
    * Fonksiyon Seçicisi ve Argüman Şifrelemesi
    * Örnekler
    * Dinamik Tiplerin Kullanımı
    * Event’ler
    * Error’ler
    * JSON
    * Katı Şifreleme Modu
    * Standart Olmayan Paket Modu
    * İndekslenmiş Event Parametrelerinin Şifrelenmesi


Ek Materyaller
  * Solidity v0.5.0 İşleyişi Bozan Değişiklikler
    * Yalnızca Anlamsal (Semantik) Değişiklikleri
    * Semantik ve Sentaktik Değişiklikler
    * Açıklık Gereksinimleri
    * Kullanımdan Kaldırılan Öğeler
    * Eski Sözleşmelerle Birlikte Çalışabilirlik
    * Örnek
  * Solidity v0.6.0 İşleyişi Bozan Değişiklikler
    * Derleyicinin Uyaramayabileceği Değişiklikler
    * Açıklık Gereksinimleri
    * Semantik ve Sentaktik Değişiklikler
    * Yeni Özellikler
    * Arayüz Değişiklikleri
    * Kodunuzu nasıl güncelleyebilirsiniz?
  * Solidity v0.7.0 İşleyişi Bozan Değişiklikler
    * Semantiğin Sessiz Değişiklikleri
    * Söz dizimindeki Değişiklikler
    * Kullanılmayan veya Güvenli Olmayan Özelliklerin Kaldırılması
    * Arayüz Değişiklikleri
    * Kodunuzu nasıl güncelleyebilirsiniz?
  * Solidity v0.8.0 İşleyişi Bozan Değişiklikler
    * Semantikte Sessiz Değişiklikler
    * Yeni Kısıtlamalar
    * Arayüz Değişiklikleri
    * Kodunuzu nasıl güncelleyebilirsiniz?
  * NatSpec Formatı
    * Dokümantasyon Örneği
    * Tags
    * Dokümantasyon Çıktısı
  * Güvenlikle İlgili Değerlendirmeler
    * Tuzaklar
    * Öneriler
  * SMTChecker and Formal Verification
    * Tutorial
    * SMTChecker Options and Tuning
    * Abstraction and False Positives
    * Real World Assumptions
  * Kaynaklar
    * Genel Kaynaklar
    * Entegre (Ethereum) Geliştirme Ortamları
    * Editör Entegrasyonları
    * Solidity Araçları
    * Üçüncü Parti Solidity Ayrıştırıcıları ve Gramerleri
  * Import Path Resolution
    * Virtual Filesystem
    * Imports
    * Base Path and Include Paths
    * Allowed Paths
    * Import Remapping
    * Using URLs in imports
  * Yul
    * Motivasyon ve Üst-düzey Tanımı
    * Basit Bir Örnek
    * Tek Başına Kullanım
    * Yul’un Resmi Olmayan Tanımı
    * Yul Tanımlaması
    * Specification of Yul Object
    * Yul Optimizer
    * Tamamlanmış ERC20 Örneği
  * Stil Klavuzu
    * Giriş
    * Kod Düzeni
    * Yerleşim Sırası
    * Adlandırma Kuralları
    * NatSpec
  * Sık Kullanılan Modeller
    * Sözleşmelerden Para Çekme
    * Erişimi Kısıtlamak
    * Durum Makinesi
  * Bilinen Bugların Listesi
  * Katkıda Bulunmak
    * Takım Toplantıları
    * Sorunlar Nasıl Rapor Edilir
    * Pull Request’ler için İş Akışı(Workflow)
    * Derleyici Testlerini Çalıştırma
    * Fuzzer’ı AFL ile Çalıştırma
    * Whiskers
    * Dokümantasyon Stil Rehberi
    * Solidity Dili Tasarımı
  * Solidity Marka Kılavuzu
    * Solidity Markası
    * Solidity Marka Adı
    * Solidity Logo Lisansı
    * Solidity Logo Kılavuzu
    * Credits
  * Language Influences


