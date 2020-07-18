import React, {Component} from 'react';

class AboutMe extends Component{
    render(){
        return(
            <div className="content-page">
                <h1>
                    Ben kimim?
                </h1>
                <p>
                    Merhaba, Kocaeli Üniversitesi Bilgisayar Mühendisliği'17 mezunuyum. Özel sektörde Yazılım Geliştirme Uzmanı olarak görev almaktayım. 
                    Yeni teknolojileri ve metodolojileri takip etmeye çalışan, temiz kod yazmayı kendisine ilke edinmiş birisiyim. Kendimi kısaca, problem çözmekten keyif alan,
                     analitik düşünebilen, karşılaştığım problemler için en iyi ve en efektif çözüm yollarını bulmayı amaçlayan bir problem çözücü olarak tanımlayabilirim.
                     Öğrenmeyi seviyorum, öğrendiklerimi uygulamak için sabırsızlanıyorum ve kişisel gelişime önem veriyorum.                   
                </p>
                <p>
                    Uzmanlık alanım olarak, profesyonel iş hayatımda çoğunlukla C#/.net kullanıyorum. Kendimi backend developer olarak tanımlasam da, yazılımcılığın programlama
                     dillerinden bağımsız olduğunu düşünüyorum. Frontend'e ve JavaScript'e ilgi duyuyorum. Veritabanı olarak MSSql, MySql, Oracle ve Postgre tecrübem bulunmaktadır. 
                </p>
                </div>
        );
    }
}

export default AboutMe;