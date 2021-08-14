import React from 'react'
import { Link } from 'gatsby';
import './postpagination.scss'


const PostPagination = (props) => {
  return (
    <div className="pagination-container">
    <div className="prev-post">
      {props.prev && (
          <p>
        <Link to={`/${props.prev.slug}`}>
            <i
              className="bi-arrow-left"
              role="img"
              aria-label="arrow-left"
            />{' '}
            {props.prev.slug}
        </Link>
          </p>
      )}
    </div>
    <div className="next-post">
      {props.next && (
          <p>
        <Link to={`/${props.next.slug}`}>
            {props.next.slug}
            <i
              className="bi-arrow-right"
              role="img"
              aria-label="arrow-right"
            />
        </Link>
          </p>
      )}
    </div>
  </div>
  )
}

export default PostPagination
