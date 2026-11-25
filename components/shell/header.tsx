import { menuFor } from "@/lib/menu";

export default function Header({ path }: { path: string }) {
  const { li, a } = menuFor(path);
  return (
    <>
    <header className="has_top centered_logo_animate scroll_header_top_area regular with_border page_header">
      {"\n"}
      <div className="header_inner clearfix">
        {"\n"}
        <div className="header_top_bottom_holder">
          {"\n"}
          <div className="header_top clearfix" style={{ backgroundColor: "rgba(21, 21, 21, 1)" }}>
            {"\n"}
            <div className="container">
              {"\n"}
              <div className="container_inner clearfix">
                {"\n"}
                <div className="left">
                  {"\n"}
                  <div className="inner">
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
                {"\n"}
                <div className="right">
                  {"\n"}
                  <div className="inner">
                    {"\n"}
                    <span className="q_social_icon_holder normal_social" data-color="#ffffff" data-hover-color="#ff0099">
                      <a itemProp="url" href="https://www.facebook.com/lumen" target="_blank">
                        <i className="qode_icon_font_awesome fa fa-facebook simple_social" style={{ color: "#ffffff", margin: "0 15px 0 0", fontSize: "22px" }}></i>
                      </a>
                    </span>
                    <span className="q_social_icon_holder normal_social" data-color="#ffffff" data-hover-color="#ff0099">
                      <a itemProp="url" href="https://www.instagram.com/lumen/" target="_blank">
                        <i className="qode_icon_font_awesome fa fa-instagram simple_social" style={{ color: "#ffffff", margin: "0 0px 0 0", fontSize: "22px" }}></i>
                      </a>
                    </span>
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
          <div className="header_bottom clearfix" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
            {"\n"}
            <div className="container">
              {"\n"}
              <div className="container_inner clearfix">
                {"\n"}
                <div className="header_inner_left">
                  {"\n"}
                  <div className="mobile_menu_button">
                    {"\n"}
                    <span>
                      {"\n"}
                      <i className="qode_icon_font_awesome fa fa-bars"></i>
                      {" "}
                    </span>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className="logo_wrapper">
                    {"\n"}
                    <div className="q_logo">
                      {"\n"}
                      <a itemProp="url" href="/">
                        {"\n"}
                        <img itemProp="image" className="normal" src="/img/img-e1471714f2.webp" alt="Logo" />
                        {" "}
                        <img itemProp="image" className="light" src="/img/img-1fa1cb9b91.gif" alt="Logo" />
                        {" "}
                        <img itemProp="image" className="dark" src="/img/img-dfa067ba7d.webp" alt="Logo" />
                        {" "}
                        <img itemProp="image" className="sticky" src="/img/img-69b743b791.png" alt="Logo" />
                        {" "}
                        <img itemProp="image" className="mobile" src="/img/img-e1471714f2.webp" alt="Logo" />
                        {" "}
                      </a>
                      {"\n"}
                    </div>
                    {"\n"}
                  </div>
                  {" "}
                </div>
                {"\n"}
                <div className="header_inner_right">
                  {"\n"}
                  <div className="side_menu_button_wrapper right">
                    {"\n"}
                    <div className="header_bottom_right_widget_holder">
                      <div className="widget qode_button_widget">
                        <a itemProp="url" href={"https://customerportal.nxtwash.com/lumen/?phone=%20%5BPHONENUMBER-HERE%5D&page=updateprofile"} target="_self" data-hover-background-color="#00ffff" data-hover-color="#0b1a4a" className="qbutton default" style={{ color: "#ffffff", backgroundColor: "#ff0099" }}>
                          MANAGE ACCOUNT
                        </a>
                      </div>
                    </div>
                    {"\n"}
                    <div className="side_menu_button">
                      {"\n"}
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                </div>
                {"\n"}
                <nav className="main_menu drop_down right">
                  {"\n"}
                  <ul id="menu-header-top-menu" className="">
                    <li id="nav-menu-item-3848" className={li("nav-menu-item-3848")}></li>
                    {"\n"}
                    <li id="nav-menu-item-4179" className={li("nav-menu-item-4179")}>
                      <a href="/unlimited-wash-club-value/" {...a("nav-menu-item-4179")}>
                        <i className="menu_icon blank fa"></i>
                        <span>
                          UNLIMITED PERKS!
                        </span>
                        <span className="plus"></span>
                      </a>
                    </li>
                    {"\n"}
                    <li id="nav-menu-item-4230" className={li("nav-menu-item-4230")}>
                      <a href="/fleet-plan/" {...a("nav-menu-item-4230")}>
                        <i className="menu_icon blank fa"></i>
                        <span>
                          Fleets
                        </span>
                        <span className="plus"></span>
                      </a>
                    </li>
                    {"\n"}
                    <li id="nav-menu-item-1930" className={li("nav-menu-item-1930")}>
                      <a href="/help-and-support/" {...a("nav-menu-item-1930")}>
                        <i className="menu_icon blank fa"></i>
                        <span>
                          Support
                        </span>
                        <span className="plus"></span>
                      </a>
                    </li>
                    {"\n"}
                    <li id="nav-menu-item-4003" className={li("nav-menu-item-4003")}>
                      <a href="/all-news-stories/" {...a("nav-menu-item-4003")}>
                        <i className="menu_icon blank fa"></i>
                        <span>
                          News
                        </span>
                        <span className="plus"></span>
                      </a>
                    </li>
                    {"\n"}
                  </ul>
                  {" "}
                </nav>
                {"\n"}
                <nav className="mobile_menu">
                  {"\n"}
                  <ul id="menu-header-top-menu-1" className="">
                    <li id="mobile-menu-item-3848" className={li("mobile-menu-item-3848")}></li>
                    {"\n"}
                    <li id="mobile-menu-item-4179" className={li("mobile-menu-item-4179")}>
                      <a href="/unlimited-wash-club-value/" {...a("mobile-menu-item-4179")}>
                        <span>
                          UNLIMITED PERKS!
                        </span>
                      </a>
                      <span className="mobile_arrow">
                        <i className="fa fa-angle-right"></i>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </li>
                    {"\n"}
                    <li id="mobile-menu-item-4230" className={li("mobile-menu-item-4230")}>
                      <a href="/fleet-plan/" {...a("mobile-menu-item-4230")}>
                        <span>
                          Fleets
                        </span>
                      </a>
                      <span className="mobile_arrow">
                        <i className="fa fa-angle-right"></i>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </li>
                    {"\n"}
                    <li id="mobile-menu-item-1930" className={li("mobile-menu-item-1930")}>
                      <a href="/help-and-support/" {...a("mobile-menu-item-1930")}>
                        <span>
                          Support
                        </span>
                      </a>
                      <span className="mobile_arrow">
                        <i className="fa fa-angle-right"></i>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </li>
                    {"\n"}
                    <li id="mobile-menu-item-4003" className={li("mobile-menu-item-4003")}>
                      <a href="/all-news-stories/" {...a("mobile-menu-item-4003")}>
                        <span>
                          News
                        </span>
                      </a>
                      <span className="mobile_arrow">
                        <i className="fa fa-angle-right"></i>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </li>
                    {"\n"}
                  </ul>
                </nav>
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
    </header>
    <a id="back_to_top" href="#">
      {"\n"}
      <span className="fa-stack">
        {"\n"}
        <span aria-hidden="true" className="qode-icon-kiko kikol kiko-arrow-up"></span>
        {" "}
      </span>
      {"\n"}
    </a>
    </>
  );
}
