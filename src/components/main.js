import PropTypes from 'prop-types'
import React from 'react'
import JSONData from "../content/mycontent.json"

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    const SocialLink = props => {
      const { url, name, icon } = { ...props }
      return (
        <a
          href={url} target="_blank"
          className={icon} rel="noreferrer"
        >
          <span className="label">{name}</span>
        </a>
      )
    }
    // let closeStyle = {"display":"inline-block","position":"absolute", "top":"0px", "right":"0px", "margin-right":"3%","margin-top":"3%", "cursor":"pointer"};

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          {/* <span className="image main">
            <div >
              <img src={JSONData.AboutImage} alt="" />
            </div>
          </span> */}
          {/* <p> */}
          {JSONData.AboutContent.map((item) => {
            return (<div><br />{item}</div>)
          })}
          <br></br>
          <div>
            <ul className="icons">
              <li>
                <SocialLink url={JSONData.twitter} name="Twitter" icon="icon fa-twitter" />
              </li>
              <li>
                <SocialLink url={JSONData.facebook} name="Facebook" icon="icon fa-facebook" />
              </li>
              <li>
                <SocialLink url={JSONData.github} name="GitHub" icon="icon fa-github" />
              </li>
              <li>
                <SocialLink url={JSONData.linkedin} name="Linkedin" icon="icon fa-linkedin" />
              </li>
              {/*
              <li>
                <SocialLink url={JSONData.medium} name="Medium" icon="icon fa-medium" />
              </li>
               <li>
                <SocialLink url={JSONData.wordpress} name="Blog" icon="icon fa-wordpress" />
              </li>
               */}
            </ul>
          </div>
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={JSONData.WorkImage} alt="" />
          </span>

          {JSONData.WorkContent}
          <br /><br />
          {JSONData.InternshipsStartLine}
          <ul>
            {JSONData.InternShips.map((item) => {
              return (<li><a href={item.link} target="_blank" rel="noreferrer">{item.name}</a><br /></li>)
            })}
          </ul>
          {JSONData.ProjectsStartLine}
          <ul>
            {JSONData.Projects.map((item) => {
              return (<li><a href={item.link} target="_blank" rel="noreferrer">{item.name}</a><br /></li>)
            })}
          </ul>

          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> Contact Me </h2>
          {/* <span className="image main">
            <img  />
          </span> */}
          {/* <p> */}
          {JSONData.CVStartLine}
          <br /><br />
          <div style={{ "display": "flex", "justifyContent": "space-around" }}>
            {/* <a href={JSONData.CV} target="_blank" >CV </a> */}
            <a href={JSONData.Resume} target="_blank" rel="noreferrer">View resume here!</a>
          </div>
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

      </div>
    )
  }


}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}



export default Main
