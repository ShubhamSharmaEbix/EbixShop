import React from 'react'

const SocialMediaCard = (props) => {
    let cls = 'widget-facebook'

    if(props.socialMediaIcon.includes('twitter')){
        cls = 'widget-twitter'
    }
    else if(props.socialMediaIcon.includes('linkedin')){
        cls = 'widget-linkedin'
    }
    else if(props.socialMediaIcon.includes('google-plus')){
        cls = 'widget-googleplus'
    }

  return (
    <div className="col-lg-3 col-sm-6">
        <div className="card">
            <div className={`social-graph-wrapper ${cls}`}>
                <span className="s-icon"><i className={props.socialMediaIcon}></i></span>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">{props.followers}</h4>
                        <p className="m-0">Followers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMediaCard