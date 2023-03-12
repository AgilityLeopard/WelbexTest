import redlight from './img/red-light.png';
import mobile from './img/main-mobile-line.svg';
import redball from './img/red-ball-2.png';

const Content = () => {
    return (
      <content className="content">
        <div className="container">
          <div className="content__wrapper">
            <div className="content__slogan">
              <h1>
                Зарабатывайте больше <span>с WELBEX</span>
              </h1>
              <p>Развиваем и контролируем продажи за вас</p>
              <img className="content__red-light" src={redlight} alt="" />
            </div>
            <div className="content__advice">
              <h3 className="content__title">
                Вместе с <span>бесплатной </span>
                <span>консультацией </span>
                мы дарим:
              </h3>
              <div className="content__layout">
                <div className="content__widgets">
                  <h3>Виджеты</h3>
                  <p>30 готовых решений</p>
                </div>
                <div className="content__widgets">
                  <h3>Dashboard</h3>
                  <p>с показателями вашего бизнеса</p>
                </div>
                <div className="content__widgets">
                  <h3>Skype Аудит</h3>
                  <p>отдела продаж и CRM системы</p>
                </div>
                <div className="content__widgets">
                  <h3>35 дней</h3>
                  <p>использования CRM</p>
                </div>
              </div>
              <div className="content__layout-mobile">
                <div>
                  <img
                    src={mobile}
                    alt=""
                    className="content__line"
                  />
                  <span>Skype аудит</span>
                </div>
                <div>
                  <img
                    src={mobile}
                    alt=""
                    className="content__line"
                  />
                  <span>30 виджетов</span>
                </div>
                <div>
                  <img
                    src={mobile}
                    alt=""
                    className="content__line"
                  />
                  <span>Dashboard</span>
                </div>
                <div>
                  <img
                    src={mobile}
                    alt=""
                    className="content__line"
                  />
                  <span>Месяц аmoCRM</span>
                </div>
              </div>
              <button className="content__button">Получить консультацию</button>
              <img
                className="content__red-ball"
                src={redball}
                alt="red ball"
              />
            </div>
          </div>
          
        </div>
        
      </content>
    );
  };
  
  export default Content;