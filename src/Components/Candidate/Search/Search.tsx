import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="input-box">
              <div className="label">Job Categories</div>
              <div className="nice-select category false" role="button">
                <span className="current">Developer</span>
                <ul className="list" role="menubar">
                  <li
                    data-value="developer"
                    className="option selected focus"
                    role="menuitem"
                  >
                    Developer
                  </li>
                  <li
                    data-value="coder"
                    className="option false"
                    role="menuitem"
                  >
                    Coder
                  </li>
                  <li
                    data-value="finance"
                    className="option false"
                    role="menuitem"
                  >
                    Finance
                  </li>
                  <li
                    data-value="accounting"
                    className="option false"
                    role="menuitem"
                  >
                    Accounting
                  </li>
                  <li
                    data-value="design"
                    className="option false"
                    role="menuitem"
                  >
                    Design
                  </li>
                  <li
                    data-value="artist"
                    className="option false"
                    role="menuitem"
                  >
                    Artist
                  </li>
                  <li
                    data-value="application"
                    className="option false"
                    role="menuitem"
                  >
                    Application
                  </li>
                  <li
                    data-value="marketing"
                    className="option false"
                    role="menuitem"
                  >
                    Marketing
                  </li>
                  <li
                    data-value="business"
                    className="option false"
                    role="menuitem"
                  >
                    Business
                  </li>
                  <li data-value="web" className="option false" role="menuitem">
                    Web
                  </li>
                  <li
                    data-value="data"
                    className="option false"
                    role="menuitem"
                  >
                    Data
                  </li>
                  <li
                    data-value="scientist"
                    className="option false"
                    role="menuitem"
                  >
                    Scientist
                  </li>
                  <li
                    data-value="designer"
                    className="option false"
                    role="menuitem"
                  >
                    Designer
                  </li>
                  <li
                    data-value="uxui"
                    className="option false"
                    role="menuitem"
                  >
                    UX/UI
                  </li>
                  <li
                    data-value="manager"
                    className="option false"
                    role="menuitem"
                  >
                    Manager
                  </li>
                  <li
                    data-value="engineer"
                    className="option false"
                    role="menuitem"
                  >
                    Engineer
                  </li>
                  <li
                    data-value="writer"
                    className="option false"
                    role="menuitem"
                  >
                    Writer
                  </li>
                  <li
                    data-value="content"
                    className="option false"
                    role="menuitem"
                  >
                    Content
                  </li>
                  <li
                    data-value="graphic"
                    className="option false"
                    role="menuitem"
                  >
                    Graphic
                  </li>
                  <li
                    data-value="management"
                    className="option false"
                    role="menuitem"
                  >
                    Management
                  </li>
                  <li
                    data-value="product"
                    className="option false"
                    role="menuitem"
                  >
                    Product
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="input-box">
              <div className="label">Location</div>
              <div className="nice-select location false" role="button">
                <span className="current">Spain, Bercelona</span>
                <ul className="list" role="menubar">
                  <li
                    data-value="spain-bercelona"
                    className="option selected focus"
                    role="menuitem"
                  >
                    Spain, Bercelona
                  </li>
                  <li
                    data-value="usa-new-york"
                    className="option false"
                    role="menuitem"
                  >
                    USA,New York
                  </li>
                  <li
                    data-value="usa-alaska"
                    className="option false"
                    role="menuitem"
                  >
                    USA,Alaska
                  </li>
                  <li
                    data-value="usa-california"
                    className="option false"
                    role="menuitem"
                  >
                    USA,California
                  </li>
                  <li
                    data-value="uk-london"
                    className="option false"
                    role="menuitem"
                  >
                    UK,London
                  </li>
                  <li
                    data-value="usa-mountain-view"
                    className="option false"
                    role="menuitem"
                  >
                    USA, Mountain View
                  </li>
                  <li
                    data-value="germany-berlin"
                    className="option false"
                    role="menuitem"
                  >
                    Germany, Berlin
                  </li>
                  <li
                    data-value="usa-cupertino"
                    className="option false"
                    role="menuitem"
                  >
                    USA, Cupertino
                  </li>
                  <li
                    data-value="usa-menlo-park"
                    className="option false"
                    role="menuitem"
                  >
                    USA, Menlo Park
                  </li>
                  <li
                    data-value="usa-redmond"
                    className="option false"
                    role="menuitem"
                  >
                    USA, Redmond
                  </li>
                  <li
                    data-value="uk-cupertino"
                    className="option false"
                    role="menuitem"
                  >
                    UK, Cupertino
                  </li>
                  <li
                    data-value="usa-san-jose"
                    className="option false"
                    role="menuitem"
                  >
                    USA, San Jose
                  </li>
                  <li
                    data-value="usa-new-york"
                    className="option false"
                    role="menuitem"
                  >
                    USA, New York
                  </li>
                  <li
                    data-value="usa-palo-alto"
                    className="option false"
                    role="menuitem"
                  >
                    USA, Palo Alto
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="input-box border-left">
              <div className="label">Keywords or Title</div>
              <input
                type="text"
                placeholder="Design, branding"
                className="keyword"
              />
            </div>
          </div>
          <div className="col-md-3 sm-mb-10 sm-mt-10">
            <button
              type="submit"
              className="text-uppercase btn-five border6 tran3s m-auto"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
