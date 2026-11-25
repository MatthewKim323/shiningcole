export default function Page404() {
  return (
    <div className="content content_top_margin_none">
      {"\n"}
      <div className="content_inner">
        {"\n"}
        <div className="container">
          {"\n"}
          <div className="container_inner default_template_holder">
            {"\n"}
            <div className="page_not_found">
              {"\n"}
              <h2>
                {" The page you are looking for is not found "}
              </h2>
              {"\n"}
              <p>
                {" The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site's homepage and see if you can find what you are looking for. "}
              </p>
              {"\n"}
              <div className="separator transparent center" style={{ marginTop: "35px" }}></div>
              {"\n"}
              <p>
                <a itemProp="url" className="qbutton with-shadow" href="/">
                  {" Back to homepage "}
                </a>
              </p>
              {"\n"}
              <div className="separator transparent center" style={{ marginTop: "35px" }}></div>
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
  );
}
