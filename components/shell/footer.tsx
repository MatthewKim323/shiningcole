import { menuFor } from "@/lib/menu";

export default function Footer({ path }: { path: string }) {
  const { li, a } = menuFor(path);
  return (
    <>
    <footer>
      {"\n"}
      <div className="footer_inner clearfix">
        {"\n"}
        <div className="footer_top_holder">
          {"\n"}
          <div className="footer_top">
            {"\n"}
            <div className="container">
              {"\n"}
              <div className="container_inner">
                {"\n"}
                <div className="four_columns clearfix">
                  {"\n"}
                  <div className="column1 footer_col1">
                    {"\n"}
                    <div className="column_inner">
                      {"\n"}
                      <div id="text-2" className="widget widget_text">
                        <h5>
                          Quick Wash Packages
                        </h5>
                        {" "}
                        <div className="textwidget"></div>
                        {"\n"}
                      </div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "-7px" }}></div>
                      <div id="nav_menu-2" className="widget widget_nav_menu">
                        <div className="menu-footer-column-1-container">
                          <ul id="menu-footer-column-1" className="menu">
                            <li id="menu-item-385" className={li("menu-item-385")}>
                              <a href="/#pricing" {...a("menu-item-385")}>
                                Super Star Plan
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-386" className={li("menu-item-386")}>
                              <a href="/#pricing" {...a("menu-item-386")}>
                                Glinting Bay Plan
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-387" className={li("menu-item-387")}>
                              <a href="/#pricing" {...a("menu-item-387")}>
                                The Works Plan
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-388" className={li("menu-item-388")}>
                              <a href="/#pricing" {...a("menu-item-388")}>
                                Star Wash Plan
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-4231" className={li("menu-item-4231")}>
                              <a href="/fleet-plan/" {...a("menu-item-4231")}>
                                Fleet Plan
                              </a>
                            </li>
                            {"\n"}
                          </ul>
                        </div>
                      </div>
                      {" "}
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className="column2 footer_col2">
                    {"\n"}
                    <div className="column_inner">
                      {"\n"}
                      <div id="text-3" className="widget widget_text">
                        <h5>
                          {"Family Owned & Operated"}
                        </h5>
                        {" "}
                        <div className="textwidget"></div>
                        {"\n"}
                      </div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "-7px" }}></div>
                      <div id="nav_menu-3" className="widget widget_nav_menu">
                        <div className="menu-footer-column-2-container">
                          <ul id="menu-footer-column-2" className="menu">
                            <li id="menu-item-3905" className={li("menu-item-3905")}>
                              <a href="/" {...a("menu-item-3905")}>
                                Home
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-2960" className={li("menu-item-2960")}>
                              <a href="/help-and-support/" {...a("menu-item-2960")}>
                                {"Help & Support"}
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-2981" className={li("menu-item-2981")}>
                              <a href="/privacy-policy/" {...a("menu-item-2981")}>
                                Privacy Policy
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-2982" className={li("menu-item-2982")}>
                              <a href="/terms-and-conditions/" {...a("menu-item-2982")}>
                                Terms and Conditions
                              </a>
                            </li>
                            {"\n"}
                            <li id="menu-item-3906" className={li("menu-item-3906")}>
                              <a href="/site-map/" {...a("menu-item-3906")}>
                                Site Map
                              </a>
                            </li>
                            {"\n"}
                          </ul>
                        </div>
                      </div>
                      {" "}
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className="column3 footer_col3">
                    {"\n"}
                    <div className="column_inner">
                      {"\n"}
                      <div id="text-4" className="widget widget_text">
                        <h5>
                          Community
                        </h5>
                        {" "}
                        <div className="textwidget"></div>
                        {"\n"}
                      </div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "-7px" }}></div>
                      <div id="nav_menu-4" className="widget widget_nav_menu">
                        <div className="menu-footer-column-3-container">
                          <ul id="menu-footer-column-3" className="menu">
                            <li id="menu-item-3020" className={li("menu-item-3020")}>
                              <a href="/all-news-stories/" {...a("menu-item-3020")}>
                                {"All News & Stories"}
                              </a>
                            </li>
                            {"\n"}
                          </ul>
                        </div>
                      </div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "20px" }}></div>
                      <div id="text-7" className="widget widget_text">
                        {" "}
                        <div className="textwidget">
                          <div data-slate-node="element">
                            {"\n"}
                            <div data-slate-node="element">
                              <span data-slate-node="text">
                                {"Holiday Operations: 8:30 – 2:30 on Memorial Day, Independence Day, Labor Day, Veteran’s Day, Christmas Eve and New Year’s Eve. CLOSED on Easter, Thanksgiving, Christmas Day, and New Year’s Day. "}
                              </span>
                              <span data-slate-node="text">
                                All other Holidays, we’re open regular hours.
                              </span>
                            </div>
                            {"\n"}
                          </div>
                          {"\n"}
                        </div>
                        {"\n"}
                      </div>
                      {" "}
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className="column4 footer_col4">
                    {"\n"}
                    <div className="column_inner">
                      {"\n"}
                      <div className="widget qode_button_widget">
                        <a itemProp="url" href={"https://customerportal.nxtwash.com/glintingbaycarwash/?phone=%20%5BPHONENUMBER-HERE%5D&page=updateprofile"} target="_self" data-hover-background-color="#ff0099" data-hover-color="#ffffff" className="qbutton default" style={{ color: "#ffffff", backgroundColor: "#ff0099" }}>
                          MANAGE ACCOUNT
                        </a>
                      </div>
                      <span className="q_social_icon_holder normal_social" data-color="#ffffff" data-hover-color="#ff0099">
                        <a itemProp="url" href="https://www.facebook.com/glintingbaywash" target="_blank">
                          <i className="qode_icon_font_awesome fa fa-facebook simple_social" style={{ color: "#ffffff", margin: "0 15px 0 15px", fontSize: "22px" }}></i>
                        </a>
                      </span>
                      <span className="q_social_icon_holder normal_social" data-color="#ffffff" data-hover-color="#ff0099">
                        <a itemProp="url" href="https://www.instagram.com/glintingbay/" target="_blank">
                          <i className="qode_icon_font_awesome fa fa-instagram simple_social" style={{ color: "#ffffff", margin: "0 0px 0 0", fontSize: "22px" }}></i>
                        </a>
                      </span>
                      <div id="block-11" className="widget widget_block">
                        {"\n"}
                        <div className="wp-block-qi-blocks-spacer qodef-block-container qodef-widget-block-47c7805b">
                          <div className="qi-block-spacer qodef-block qodef-m"></div>
                        </div>
                        {"\n"}
                      </div>
                      <div id="block-13" className="widget widget_block">
                        {"\n"}
                        <div style={{ height: "31px" }} aria-hidden="true" className="wp-block-spacer"></div>
                        {"\n"}
                      </div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "0px" }}></div>
                      <div id="block-10" className="widget widget_block">
                        {"\n"}
                        <div className="wp-block-qi-blocks-spacer qodef-block-container qodef-widget-block-3ca81dbe">
                          <div className="qi-block-spacer qodef-block qodef-m"></div>
                        </div>
                        {"\n"}
                      </div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "27px" }}></div>
                      <div className="widget qode_separator_widget" style={{ marginBottom: "-8px" }}></div>
                      {" "}
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
        <div className="footer_bottom_holder">
          {"\n"}
          <div style={{ backgroundColor: "rgba( 255, 255, 255, 0.1)", height: "1px" }} className="footer_bottom_border in_grid"></div>
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="container_inner">
              {"\n"}
              <div className="footer_bottom">
                {"\n"}
                <div className="wp-block-image">
                  {"\n"}
                  <figure className="aligncenter size-large is-resized">
                    <img loading="lazy" decoding="async" width="1000" height="703" src="/img/img-cecb00be3a.webp" alt="glinting bay logo" className="wp-image-4789" style={{ width: "462px", height: "auto" }} srcSet="/img/img-b7d71d9ebd.webp 1000w, /img/img-fe8f6d534b.webp 300w, /img/img-912f7ac750.webp 768w, /img/img-8ab3f5eaf3.webp 700w" sizes="(max-width: 1000px) 100vw, 1000px" />
                  </figure>
                  {"\n"}
                </div>
                <p style={{ marginLeft: "10px", marginTop: "-2px" }}>
                  <a href="/">
                    © 2026 Glinting Bay Car Wash, LLC.
                  </a>
                </p>
                {"\n"}
                <div style={{ height: "34px" }} aria-hidden="true" className="wp-block-spacer"></div>
                {"\n"}
                <p style={{ marginLeft: "16px", marginTop: "-2px" }}>
                  <a href="https://usdigitalworks.com">
                    [ Powered by US Digital Works ]
                  </a>
                </p>
                {"\n"}
                <div style={{ height: "34px" }} aria-hidden="true" className="wp-block-spacer"></div>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
      </div>
      {"\n"}
    </footer>
    </>
  );
}
