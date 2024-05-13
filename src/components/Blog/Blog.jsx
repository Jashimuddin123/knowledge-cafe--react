import PropTypes from 'prop-types';
const Blog = ({blog}) => {
 const {cover, title, author_img, author, posted_date, reading_time} = blog
 console.log(cover, author_img);
console.log(blog);
    return (
        <div>
             <img src={cover} alt="" />
             <h2>Title: {title}</h2>
             <h4 className=' '>aquthor-name : {author}</h4>
             <p>this is adnan</p>
            <img className='w-14 rounded-full h-14' src={author_img} alt="" />
            <p>{reading_time}</p>
           
        </div>
        
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;