import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import HomeNavBar from '@/components/HomeNavBar'
import HomeFooter from '@/components/HomeFooter'

const HomePage: NextPage = () => {
    return (
        <>
       
     <HomeNavBar/>
      <main>
      <section className="hero-section hero-section-full-height">
          <div className="container-fluid">
              <div className="row">

                  <div className="col-lg-12 col-12 p-0">
                      <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <img src="images/slide/volunteer-helping-with-donation-box.jpg"
                                      className="carousel-image Image-fluid" alt="..."/>

                                  <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h3>كل طفل </h3>
                                        <div className='text4'>يستحق العناية والاهتمام</div>
                                        
                                  </div>
                              </div>

                              <div className="carousel-item">
                                  <img src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                                      className="carousel-image Image-fluid" alt="..."/>

                                  <div className="carousel-caption d-flex flex-column justify-content-end">
                                  <h3>معا من أجل</h3>
                                        <div className='text4'>مستقبل أفضل</div>
                                  </div>
                              </div>

                              <div className="carousel-item">
                                  <img src="images/slide/medium-shot-people-collecting-donations.jpg"
                                      className="carousel-image Image-fluid" alt="..."/>

                                  <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h3>توفير الرعاية والدعم </h3>
                                        <div className='text4'>الذي يحتاجه كل طفل</div>
                                  </div>
                              </div>
                          </div>

                          <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide"
                              data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                          </button>

                          <button className="carousel-control-next" type="button" data-bs-target="#hero-slide"
                              data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                          </button>
                      </div>
                  </div>

              </div>
          </div>
      </section>


      <section className="section-padding" id="section_2">
          <div className="container">
              <div className="row">

                  <div className="col-lg-10 col-12 text-center mx-auto">
                      <div className='text4'>مؤسسـة دار الأطفـــال أسفي للرعايــة الاجتماعيـة</div> 
                      <div className="mb-5 mt-2 text1"> هي مؤسسة للرعاية الاجتماعية افتتحت سنة 1956 تهدف إلى :</div>  
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="featured-block d-flex justify-content-center align-items-center">
                          <div className="d-block">
                              <img src="images/icons/education.png" className="featured-block-image Image-fluid" alt=""/>

                              <p className="featured-block-text">تعزيز الرصيد المعرفي و الثقافي للمستفيدين و ذلك عن طريق تنظيم مختلف الأنشطة الثقافية. </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                      <div className="featured-block d-flex justify-content-center align-items-center">
                          <div className="d-block">
                              <img src="images/icons/heart.png" className="featured-block-image Image-fluid" alt=""/>

                              <p className="featured-block-text">غرس المثل الإنسانية و القيم العليا في المستفيدين من خلال تنظيم أنشطة تربوية و توجيهية و رياضية. </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                      <div className="featured-block d-flex justify-content-center align-items-center">
                          <div className="d-block">
                              <img src="images/icons/receive.png" className="featured-block-image Image-fluid" alt=""/>

                              <p className="featured-block-text">  التكفل الشامل بالمستفيدين (الإيواء، الإطعام، الملبس، التمدرس، الرعاية الصحية و النفسية).</p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      <section className="section-padding section-bg">
          <div className="container">
              <div className="row">

                  <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                      <img src="images/group-people-volunteering-foodbank-poor-people.jpg"
                          className="custom-text-box-image Image-fluid" alt=""/>
                  </div>

                  <div className="col-lg-6 col-12">
                      <div className="custom-text-box">
                      <div className="mb-3 text4">الرسـالــة</div>
       
                                    <div className="custom-list">
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <div className="text2">المساهمة في تحقيق التكافل الاجتماعي عبر محاربة الفقر و الهشاشة.</div>
                                      </div>
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <span className="text2">تحقيق تكافؤ الفرص عبر توفير أحسن الظروف للتمدرس لفائدة المستفيدات و المستفيدين في وضعية صعبة و ذلك من أجل بناء شخصيتهم و تسهيل إندماجهم .</span>
                                      </div>
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <span className="text2">تمكين الشابات و الشبان في وضعية الهشاشة من إكتساب مهارات تؤهلهم إلى ولوج سوق الشغل .</span>
                                      </div>
                                    </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                              <div className="custom-text-box mb-lg-0">
                                  <h3 className="mb-3">القــيـــم</h3>

                                  <div className="custom-list">
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <div className="text2">احترام المكانة الانسانية. </div>
                                      </div>
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <span className="text2">التضامن الاجتماعي.</span>
                                      </div>
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <span className="text2">الشفافية.</span>
                                      </div>
                                      <div style={{display:'flex'}} className="custom-list-item ">
                                          <i className="bi-check custom-text-box-icon ms-2"></i>
                                          <span className="text2">الاستمرارية.</span>
                                      </div>
                                    </div>
                              </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-12">
                              <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                                  <div className="counter-thumb">
                                      <div className="d-flex">
                                          <span className="counter-number" data-from="1" data-to="2009"
                                              data-speed="1000"></span>
                                          <span className="counter-number-text"></span>
                                      </div>

                                      <span className="counter-text">Founded</span>
                                  </div>

                                  <div className="counter-thumb mt-4">
                                      <div className="d-flex">
                                          <span className="counter-number" data-from="1" data-to="120"
                                              data-speed="1000"></span>
                                          <span className="counter-number-text">B</span>
                                      </div>

                                      <span className="counter-text">Donations</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      <section className="section-padding" id="section_3">
          <div className="container">
              <div className="row">

                  <div className="col-lg-12 col-12 text-center mb-4">
                      <div className='text4'>أنشطة</div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4">
                      <div className="custom-block-wrap">
                          <img src="images/activites/activite_3.jpg"
                              className="custom-block-image Image-fluid " alt=""/>

                          <div className="custom-block">
                              <div className="custom-block-body">
                                  <h5 className="mb-3 max-lines_titre">احتفالا بذكرى عيد الاستقلال</h5>

                                  <p className='max-lines'>و دائما و احتفالا بذكرى عيد الاستقلال،عرفت دار المسنين معرضا لمجموعة من المستفيداتمن خدمات المؤسسة ، شملت عرض  منتجات يدوية و حلويات من إبداعهن  و ذلك في إطار برنامج الإدماج الاقتصادي و الاجتماعي .
                                  </p>
                              </div>

                              <a href="/activites/[]A" className="custom-btn btn">المزيد<i className="bi bi-caret-left-fill me-2"></i></a>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4">
                      <div className="custom-block-wrap">
                          <img src="images/activites/activite_2.jpg"
                              className="custom-block-image Image-fluid " alt=""/>

                          <div className="custom-block">
                              <div className="custom-block-body">
                                  <h5 className="mb-3 max-lines_titre">جزء من أنشطة مؤسسة دار الأطفال بأسفي</h5>

                                  <p className='max-lines'>جزء من أنشطة مؤسسة دار الأطفال بأسفي ،كانت سنة متميزة بفضل مجهود مشترك ما بين الجمعية الخيرية الإسلامية و إدارة المؤسسة و جميع أطرها و مستخدميها و كذلك جميع شركائنا الذين يستحقون التنويه على مجهوداتهم الاستثنائية،فللجميع منا جزيل الشكر و الإمتنان
                                  </p>
                              </div>

                              <a href="/activites/[]" className="custom-btn btn">المزيد<i className="bi bi-caret-left-fill me-2"></i></a>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4">
                      <div className="custom-block-wrap">
                          <img src="images/activites/activite_1.jpg"
                              className="custom-block-image Image-fluid" alt=""/>
                          <div className="custom-block">
                              <div className="custom-block-body">
                                  <h5 className="mb-3 max-lines_titre">البطولة الوطنية 47 لمؤسسات الرعاية الاجتماعية</h5>

                                  <p className='max-lines'>احتضنت مؤسسة الرعاية الاجتماعية دار الأطفال الإقصائيات الجهوية للبطولة الوطنية 47 لمؤسسات الرعاية الاجتماعية (كرة القدم) تحت إشراف المندوبية الإقليمية للتعاون الوطني بأسفي،.
                                  </p>
                              </div>

                              <a href="/activites/[]" className="custom-btn btn">المزيد<i className="bi bi-caret-left-fill me-2"></i></a>
                          </div>
                      </div>
                  </div>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <a style={{padding: '11px 25px',width: '175px', borderRadius:'var(--border-radius-large)',fontSize: 'var(--btn-font-size)'}}  className="custom-btn2 custom-border-btn2 btn smoothscroll mt-5"> 
                        <Link href="activites/" >كل الأنشطة</Link>
                    </a>
                 
                  </div>
                 
              </div>
          </div>
      </section>

      <section className="testimonial-section section-padding section-bg">
          <div className="container">
              <div className="row">

                  <div className="col-lg-8 col-12 mx-auto">
                      <div className="text4">طلب التسجيل </div>
                      <div className='mb-lg-4 text5'>في مؤسسـة دار الأطفـــال أسفي</div>   
                      <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carousel-caption">
                                    <div className="carousel-title text3">نحن نرحب بجميع الأطفال ونسعى لجعلهم يشعرون بالأمان والراحة والسعادة في دار الأطفال.</div>

                                    <small className="carousel-name"><span className="carousel-name-title">الجمعية الخيرية الإسلامية بأسفي</span>
                                        </small>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-caption">
                                    <div className="carousel-title text3">نحن نسعى جاهدين لتوفير الرعاية والحب والدعم الذي يحتاجه كل طفل في دار الأطفال لنمنحهم فرصة للنمو والتطور</div>

                                    <small className="carousel-name"><span className="carousel-name-title">الجمعية الخيرية الإسلامية بأسفي</span>
                                        </small>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-caption">
                                    <div className="carousel-title text3">نحن نعتني بالأطفال كما لو أنهم أطفالنا الخاصة ونحرص على توفير كل ما يحتاجونه للنمو والتطور.</div>

                                    <small className="carousel-name"><span className="carousel-name-title">الجمعية الخيرية الإسلامية بأسفي</span>
                                        </small>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-caption">
                                    <div className="carousel-title text3">نحن نعمل بكل جهد وإخلاص لجعل دار الأطفال مكانًا يشعر فيه الأطفال بالحب والأمان والاهتمام وينمون فيه بشكل صحي وإيجابي.</div>

                                    <small className="carousel-name"><span className="carousel-name-title">الجمعية الخيرية الإسلامية بأسفي</span>
                                        </small>
                                </div>
                            </div>


                        </div>
                        </div>
                    
                      <Link  href="demande/" > 
                      <a style={{padding: '11px 25px',width: '175px'}} className="custom-btn btn smoothscroll mt-5">تقديم طلب
                      </a>       
                      </Link>
                               
                  </div>

              </div>
          </div>
      </section>


      <section className="contact-section section-padding" id="section_4">
          <div className="container">
              <div className="row">

                  <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                      <div className="contact-info-wrap">
                          <div className='text4 mb-3'>اتصل بنا</div>

                          <div className="contact-info">

                              <p className="d-flex mb-2">
                                  <i className="bi-geo-alt ms-2"></i>
                                  شارع الشهيد محمد بوليفة سيدي عبد الكريم أسفي
                              </p>

                              <p className="d-flex mb-2">
                                  <i className="bi-telephone ms-2"></i>

                                  <a href="tel: 05246-68508">
                                  05246-68508
                                  </a>
                              </p>

                              <p className="d-flex">
                                  <i className="bi-envelope ms-2"></i>

                                  <a href="as.mus.bienfaisancesafi@gmail.com">
                                    as.mus.bienfaisancesafi@gmail.com
                                  </a>
                              </p>
                              <p className="d-flex mb-2">
                                <i className="bi bi-clock ms-2"></i>
                                الإثنين - الجمعة: 9 صباحا - 16 ظهرا ,السبت : 9 صباحا - 13 ظهرا
                             </p>




                          </div>
                      </div>
                  </div>

                  <div className="col-lg-5 col-12 mx-auto">
                      <form className="custom-form contact-form" action="#" method="post" role="form">
                          <h3 className='mb-4'>اترك لنا رسالة!</h3>

                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-12">
                                  <input type="text" name="first-name" id="first-name" className="form-control"
                                      placeholder="الإسم الشخصي " required/>
                              </div>

                              <div className="col-lg-6 col-md-6 col-12">
                                  <input type="text" name="last-name" id="last-name" className="form-control"
                                      placeholder="الإسم العائلي" required/>
                              </div>
                          </div>
                          <input type="number" name="telephone" id="telephone" className="form-control"
                              placeholder="رقم الهاتف" required/>

                          <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control"
                              placeholder="البريد الإلكتروني" required/>

                          <textarea name="message" rows="5" className="form-control" id="message"
                              placeholder="الرسالة"></textarea>

                          <button type="submit" className="form-control">أرسل الرسالة</button>
                      </form>
                  </div>

              </div>
          </div>
      </section>
      </main>
      <HomeFooter/>

    {/* <script src="js/jquery.min.js"></script> */}
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.sticky.js"></script>
    <script src="js/click-scroll.js"></script>
    <script src="js/counter.js"></script>
    <script src="js/custom.js"></script>

    </>
    )
}

export default HomePage
