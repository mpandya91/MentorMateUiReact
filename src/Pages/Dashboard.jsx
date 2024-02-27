// import * as React from "react";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardCover from "@mui/joy/CardCover";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";

// export default function MediaCover() {
//   return (
//     <Box
//       component="ul"
//       sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
//     >
//       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
//         <CardCover>
//           <img
//             src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
//             srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
//             loading="lazy"
//             alt=""
//           />
//         </CardCover>
//         <CardContent>
//           <Typography
//             level="body-lg"
//             fontWeight="lg"
//             textColor="#fff"
//             mt={{ xs: 12, sm: 18 }}
//           >
//             Image
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

import React from "react";
import PostCard from "../components/PostCard";
import { Typography } from "@mui/joy";

const Dashboard = () => {
  return (
    <div className="main-container">
      <div className="card-with-white-bg">
        <div className="logo"></div>
        <div className="userProfile">
          <div className="avatar">img</div>
          <div className="username"></div>
          <div className="userData">
            <div className="post">
              <div className="number-of-posts"></div>
              <span>Posts</span>
            </div>
            <div className="followers">
              <div className="number"></div>
              <span>Followers</span>
            </div>
            <div className="following">
              <div className="number-of-follow"></div>
              <span>Following</span>
            </div>
          </div>
        </div>
        <div className="menu"></div>
      </div>
      <div className="card-with-dark-bg">
        <div className="header">
          <div className="searchBox"></div>
          <div className="darkModeToggle"></div>
          <div className="button-create-post"></div>
        </div>
        <div className="content-container">
          <Typography noWrap level="h1" variant="plain">
            postTitle
          </Typography>
          <div className="post-card-container">
            <PostCard />
            {/* <div className="post-card-header">
              <div className="avatar"></div>
              <div className="username"></div>
              <div className="post-option"></div>
            </div>
            <div className="post-card-content">
              <div className="post-content"></div>
              <div className="post-option"></div>
            </div>
            <div className="post-card-footer">
              <div className="post-caption"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
