import React, { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import SearchInput from 'components/SearchInput';
import debug from 'helpers/debug';
import Jumbotron from 'quran-components/lib/Jumbotron';

// تم تغيير هذا السطر: لم نعد نستخدم المسار المحلي، بل الرابط المباشر من GitHub
const logo = "https://raw.githubusercontent.com/zkariafisal/Oreo-quiz-images/refs/heads/main/q.png";
const styles = require('./style.scss');

class IndexHeader extends Component {

  renderSearch() {
    if (this.props.noSearch) {
      return null;
    }

    return (
      <SearchInput />
    );
  }

  render() {
    debug('component:IndexHeader', 'Render');

    return (
      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <Link to="/" className={styles.link} data-metrics-event-name="IndexHeader:Link:Index">
                {/*
                  تم تغيير مصدر الصورة (src) لاستخدام المتغير الجديد `logo`
                  الذي يحتوي على رابط الصورة من GitHub.
                  سيبقى اسم الكلاس (className) كما هو للحفاظ على التنسيق.
                */}
                <img src={logo} className={styles.logo} alt="New Logo" />
              </Link>
              <h4 className={styles.title}>THE NOBLE QUR&#x27;AN</h4>
              {this.renderSearch()}
            </div>
          </div>
        </div>
      </Jumbotron>

    );
  }
}

IndexHeader.propTypes = {
  noSearch: PropTypes.bool
};

export default IndexHeader;
