import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Trang chủ",
    posts: "Bài viết",
    tags: "Chủ đề",
    about: "Giới thiệu",
    archives: "Lưu trữ",
    search: "Tìm kiếm",
  },
  post: {
    publishedAt: "Đăng ngày",
    updatedAt: "Cập nhật",
    sharePostIntro: "Chia sẻ bài viết:",
    sharePostOn: "Chia sẻ bài viết lên {{platform}}",
    sharePostViaEmail: "Chia sẻ bài viết qua email",
    tagLabel: "Chủ đề",
    backToTop: "Lên đầu trang",
    tableOfContents: "Mục lục",
    goBack: "Quay lại",
    editPage: "Sửa trang",
    previousPost: "Bài trước",
    nextPost: "Bài tiếp theo",
  },
  pagination: {
    prev: "Trước",
    next: "Sau",
    page: "Trang",
  },
  home: {
    socialLinks: "Kết nối",
    featured: "Nổi bật",
    recentPosts: "Bài mới",
    allPosts: "Tất cả bài viết",
  },
  footer: {
    copyright: "Bản quyền",
    allRightsReserved: "Kizai Solutions JSC.",
  },
  pages: {
    tagTitle: "Chủ đề",
    tagDesc: "Các bài viết thuộc chủ đề",

    tagsTitle: "Chủ đề",
    tagsDesc: "Tất cả chủ đề trên blog.",

    postsTitle: "Bài viết",
    postsDesc: "Tất cả bài viết của KIZAI AI.",

    archivesTitle: "Lưu trữ",
    archivesDesc: "Bài viết theo thời gian.",

    searchTitle: "Tìm kiếm",
    searchDesc: "Tìm bài viết...",
  },
  a11y: {
    skipToContent: "Chuyển đến nội dung",
    skipTableOfContents: "Bỏ qua mục lục",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    toggleTheme: "Đổi giao diện sáng/tối",
    searchPlaceholder: "Tìm bài viết...",
    noResults: "Không tìm thấy kết quả",
    goToPreviousPage: "Về trang trước",
    goToNextPage: "Sang trang sau",
  },
  notFound: {
    title: "404",
    message: "Không tìm thấy trang",
    goHome: "Về trang chủ",
  },
} satisfies UIStrings;
