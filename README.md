---
title: Copilot Use Case Portal
description: Hướng dẫn chạy, cập nhật nội dung, build và triển khai thư viện use case Microsoft 365 Copilot.
---

## Yêu cầu

* Node.js 22.12 trở lên
* npm đi kèm Node.js

## Chạy trên máy

Mở terminal tại thư mục workspace `CopilotSP`, sau đó chạy:

```powershell
cd copilot-portal
npm ci
npm run dev
```

Mở địa chỉ được Astro in ra, thường là `http://localhost:4321/`. Nếu terminal đang ở sẵn trong `copilot-portal`, bỏ qua lệnh `cd copilot-portal`.

Các lệnh thường dùng:

```powershell
npm run check
npm run build
npm run preview
```

`check` kiểm tra nội dung và kiểu dữ liệu. `build` tạo site tĩnh trong `dist/`. `preview` phục vụ bản build để kiểm tra trước khi deploy.

## Cập nhật nội dung

* Use case tiếng Việt nằm trong `content/banking/`, `content/hr/` và `content/sales/`.
* Nội dung tiếng Anh nằm trong các thư mục tương ứng dưới `content/en/`.
* Trang tình huống dùng `.mdx` và component `src/components/CaseStudyTemplate.astro`.
* Giữ các trường frontmatter `title`, `description`, `department`, `level` và `experience` để trang lọc use case hoạt động.
* Trang Agents và Copilot trong ứng dụng dùng `src/components/FeatureLanding.astro`.
* CSS dùng chung nằm trong `src/styles/custom.css`; CSS theo component nằm cạnh component đó.
* Ảnh tĩnh đặt trong `public/assets/`, rồi tham chiếu bằng đường dẫn như `/assets/ten-anh.jpg`.
* Không sửa trực tiếp `dist/`; thư mục này được tạo lại mỗi lần build.

Sau khi sửa, chạy `npm run check` và `npm run build` trước khi deploy.

## Triển khai

Site hiện được build thành HTML/CSS/JavaScript tĩnh, không cần server Node.js để chạy nội dung hiện có. Hướng dẫn cấu hình Azure Static Web Apps và Cloudflare Pages nằm trong [config/hosting.md](./config/hosting.md). App location là `copilot-portal`, build command là `npm run build`, output directory là `dist`.

## Bảo mật và file `.env`

Hiện tại project không cần `.env`, không có backend hoặc API kết nối được cấu hình trong source. Không tạo file chứa secret nếu chưa có tính năng cần secret.

`.gitignore` bỏ qua `.env` và `.env.*`, đồng thời cho phép commit `.env.example`. File mẫu chỉ nên chứa tên biến và giá trị giả, không chứa secret thật. Có thể kiểm tra quy tắc ignore bằng `git check-ignore .env` sau khi project được đặt trong Git repository.

Lưu ý khi thêm kết nối hoặc biến môi trường:

* Mọi giá trị có tiền tố `PUBLIC_` trong Astro được xem là công khai và có thể xuất hiện trong mã gửi xuống trình duyệt. Không đặt API key, mật khẩu hoặc client secret vào đó.
* Với site tĩnh, biến môi trường được dùng lúc build có thể bị nhúng vào HTML hoặc JavaScript. Không đưa secret vào frontend, kể cả khi biến không có tiền tố `PUBLIC_`.
* URL/API endpoint có thể bị người dùng xem trong trình duyệt. Lộ hostname không đồng nghĩa lộ thông tin đăng nhập, nhưng server phải có xác thực và chỉ mở các endpoint cần thiết.
* Nếu cần giữ secret, đặt phần gọi API trong backend/serverless function và lưu secret trong cấu hình môi trường của dịch vụ hoặc Azure Key Vault. Không đưa secret vào repository.
* Nếu secret đã từng được push, hãy thu hồi hoặc đổi secret ngay. Xóa file ở commit mới không xóa secret khỏi lịch sử Git; repository riêng tư cũng không biến secret đã commit thành an toàn.

## Project Layout

* `src/` chứa schema nội dung, components và CSS.
* `content/` chứa trang Markdown/MDX theo phòng ban và ngôn ngữ.
* `public/` chứa ảnh và cấu hình Azure Static Web Apps.
* `docs/` chứa ghi chú thiết kế.
* `config/` chứa hướng dẫn hosting.