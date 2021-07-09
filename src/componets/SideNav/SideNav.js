import React, { Fragment } from 'react'

const SideNav = () => {

  return(
    <aside className='leftSide-Section'>
      <div>
        <div className="leftSide-Split-Housing">
          <div className="leftSide-Split-Top">
            <div className="leftSide-Top-Logo">
              <div>
                <a href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16">
                  <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="leftSide-Top-Links">
              <nav>
                <a href="#">
                  <div className="links-housing-PicText">
                      <div className="links-Pic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                      </div>
                      <div className="links-Text-housing">
                        <span className="links-Text">Home</span>
                      </div>
                  </div>
                </a>

                <a href="#">
                  <div className="links-housing-PicText">
                      <div className="links-Pic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                      </div>
                      <div className="links-Text-housing">
                        <span className="links-Text">Profile</span>
                      </div>
                  </div>
                </a>
              </nav>
            </div>
            <div className="leftSide-Top-NewPost">
              <button href='#'>Post</button>
            </div>
          </div>
          <div className="leftSide-Split-Bottom">
            <div className="leftSide-Bottom-Housing">
              <div className="leftSide-Bottom-AccountMenu">
                <div className="AccountMenu-Profile-Picture"></div>
                <div className="AccountMenu-Profile-Names"></div>
                <div className="AccountMenu-Profile-Settings"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideNav
