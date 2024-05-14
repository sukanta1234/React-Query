export const endpoints = {
  auth: {
    register: "/register",
    login: "/login",
    update: "/update-password",
  },
  cms: {
    banner: "/banner",
    service: "/service",
    testimonial: "/testimonial",
    team: "/team",
    course: "/course",
    contact: "/contact/create",
    allBlog: "/allBlog",
    category: "/showallcategory",
    cateWisepost:"/category/post",
    latestPost:"/letest-post",
    blogDetails:"/blogdetails",
    commentShow:"/comment",
    like:"/blog/like",
    disLike:"blog/unlike"
  },

};

export const successNotification = [
  endpoints.auth.register,
  endpoints.auth.login,
  endpoints.auth.update,
  endpoints.cms.banner,
  endpoints.cms.service,
  endpoints.cms.testimonial,
  endpoints.cms.team,
  endpoints.cms.course,
  endpoints.cms.contact,
  endpoints.cms.allBlog,
  endpoints.cms.category,
  endpoints.cms.latestPost,
  endpoints.cms.blogDetails,
  endpoints.cms.commentShow,
  endpoints.cms.like,
  endpoints.cms.disLike
  
];
