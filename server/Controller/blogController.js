const Blog = require("../Models/Blog");
const Feature = require("../Models/Feature");

exports.homepage = async (req, res) => {
    try {
        const limitNumber = 4;
        const featured = await Feature.find({}).limit(limitNumber);
        const travel = await Blog.find({ "category": "Travel" }).sort({_id: -1}).limit(5);
        const science = await Blog.find({"category": "Science"}).sort({_id: -1}).limit(5)
        const blogs = { featured, travel, science };
        console.log(blogs);
        res.render("index", { blogs });

    } catch (error) {
        res.status(500).send({message: error.message || "Error Ocuured"});
    }
  
};

exports.allposts = async (req, res) => {
  return res.render("allpost");
};

exports.submitBlog = async (req, res) => {
  return res.render("submit-blog");
};

exports.blogPage = async (req, res) => {
  return res.render("blog.ejs");
};

exports.contact = async (req, res) => {
  return res.render("contact");
};

async function insertDummyData() {
  try {
    await Blog.insertMany([
      {
        "title": "Our Universe",
        "blog_image": "recommended-6.jpg",
        "author_img": "author-1.jpg",
        "category": "Science",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      },
      {
        "title": "Time Travel",
        "blog_image": "recommended-7.jpg",
        "author_img": "author-2.jpg",
        "category": "Science",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      },    
      {
        "title": "Parallel Universe",
        "blog_image": "recommended-8.jpg",
        "author_img": "author-3.jpg",
        "category": "Science",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }       
    ]);
  } catch (err) {
    console.error(err);
  }
}
// insertDummyData();