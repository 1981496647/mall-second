import request from "./request";
export function getHome() {
  return request({
    url: "/home/multidata",
  });
}

export function getHomeList(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}

export function getRecommend() {
  return request({
    url: "/recommend",
  });
}

export function getClassify() {
  return request({
    url: "/category",
  });
}

export function getClassitem(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey,
    },
  });
}

export function getClassifyDetail(minWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      minWallkey,
      type,
    },
  });
}
