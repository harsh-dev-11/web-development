const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';
const postContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo = (postTime) =>{
  const currentTime = new Date();
  postTime = new Date(postTime);
  const timeDiff = currentTime - postTime;

  const msInMinute = 60*1000;
  const msInHour = msInMinute*60;
  const msInDay = msInHour*24;

  const minutesDiff = Math.floor(timeDiff/msInMinute);
  const hoursDiff = Math.floor(timeDiff/msInHour);
  const DaysDiff = Math.floor(timeDiff/msInDay);

  if(minutesDiff < 60) return `${minutesDiff}m ago`;
  if(hoursDiff < 24) return `${hoursDiff}h ago`;
  else{
    return `${DaysDiff}d ago`;
  }
};

const viewCount = (views) => {
  if(views >= 1000) return `${Math.floor(views/1000)}k`;
  return views;
};

const forumCategory = (categoryId) => {
  if(categoryId in allCategories){
    const {category, className} = allCategories[categoryId];
    return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${categoryId}">${category}</a>`;
  }
  else{
    return `<a class="category general" href="${forumCategoryUrl}general/${categoryId}">General</a>`;
  }
};

const avatars = (posters, users) => {
  return posters.map(poster => {
    const user = users.find(user =>user.id === poster.user_id);
    const userAvatarURL = user.avatar_template.replace("{size}", 30);
    const sourceURL = userAvatarURL.startsWith("/")?`${avatarUrl}${userAvatarURL}`:`${userAvatarURL}`;
    return `<img src="${sourceURL}" alt="${user.name}">`;
  }).join("");
};

const showLatestPosts = (obj) => {
  const {users, topic_list} = obj;
  const topics = topic_list.topics;
  postContainer.innerHTML = topics.map(topic => {
    const {id, title, views, posts_count, slug, posters, category_id, bumped_at} = topic;
    return `<tr><td><a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCategory(category_id)}</td><td><div class="avatar-container">${avatars(posters,users)}</div></td><td>${posts_count-1}</td><td>${views}</td><td>${timeAgo(bumped_at)}</td></tr>`;
  }).join("");
};

function fetchData(){
  fetch('https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json').then(res=>res.json()).then(data => showLatestPosts(data)).catch(err => console.log(err));
}
fetchData();