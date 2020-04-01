import express from 'express'
import userCtrl from '../controllers/user.controller'
import postCtrl from '../controllers/post.controller'

const router = express.Router()

router.route('/api/posts/new/:userId')
  .post( postCtrl.create)

router.route('/api/posts/photo/:postId')
  .get(postCtrl.photo)

router.route('/api/posts/by/:userId')
  .get( postCtrl.listByUser)

router.route('/api/posts/feed/:userId')
  .get( postCtrl.listNewsFeed)

router.route('/api/posts/:postId')
  .delete( postCtrl.isPoster, postCtrl.remove)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)

export default router
