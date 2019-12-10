import { Router } from "express";
const router = Router();
import { UserRoutes } from "./user/user.route";
import { TutorRoutes } from "./tutor/tutor.route";
import { SkillRoutes } from "./skill/skill.route";
import { UploadRoutes } from "./upload/upload.route"
// import { AuthRoutes } from "./auth/auth.route";

const assign: { path: string; controller: Router }[] = [
  {
    path: "/",
    controller: new UserRoutes().router
  },
  {
    path: "/tutor",
    controller: new TutorRoutes().router
  },
  {
    path: "/skill",
    controller: new SkillRoutes().router
  },
  {
    path: "/upload",
    controller: new UploadRoutes().router
  }
];

assign.forEach(({ path, controller }) => {
  router.use(path, controller);
});

export default router;