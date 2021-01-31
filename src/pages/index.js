import * as React from "react"

const IndexPage = () => {
  return (
    <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper" onMouseDown={this.speedUp}
            onMouseUp={this.speedDown}
            onTouchStart={this.speedUp}
            onTouchEnd={this.speedDown}>
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
          </div>
          <WhatsAppPluginWidget />
          {imageOrCanvas}
          <div style={{ "position": "absolute", "width": "100%", "alignItems": "center", "bottom": "10px" }}>
            <Footer timeout={this.state.timeout} />
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage
