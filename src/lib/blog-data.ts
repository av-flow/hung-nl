import type { StaticImageData } from "next/image";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  imageUrl: string;
  imageHint: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: '5-xu-huong-dau-tu-tai-chinh-2025',
    title: '5 Xu Hướng Đầu Tư Tài Chính Định Hình Năm 2025',
    excerpt: 'Khám phá những xu hướng đầu tư quan trọng nhất đang định hình thị trường tài chính trong năm 2025, từ công nghệ AI đến tài chính bền vững.',
    date: 'July 20, 2025',
    author: 'Chuyên gia Tài chính',
    imageUrl: 'https://placehold.co/1200x630.png',
    imageHint: 'finance technology',
    content: `
      <p class="mb-4 text-lg">Năm 2025 chứng kiến sự thay đổi mạnh mẽ trong bối cảnh đầu tư toàn cầu. Các nhà đầu tư cần nhạy bén để nắm bắt cơ hội và giảm thiểu rủi ro. Dưới đây là 5 xu hướng chính bạn không thể bỏ qua.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">1. Trí tuệ nhân tạo (AI) và Tự động hóa</h3>
      <p class="mb-4 text-lg">AI không còn là khoa học viễn tưởng. Nó đang được ứng dụng rộng rãi trong việc phân tích dữ liệu, dự báo thị trường và quản lý danh mục tự động (robo-advisor). Các công ty công nghệ tích hợp AI đang là điểm sáng đầu tư.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">2. Đầu tư bền vững (ESG)</h3>
      <p class="mb-4 text-lg">Các yếu tố Môi trường, Xã hội và Quản trị (ESG) ngày càng trở thành tiêu chí quan trọng. Các quỹ đầu tư ESG không chỉ mang lại lợi nhuận tài chính mà còn tạo ra tác động tích cực cho xã hội.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">3. Sự trỗi dậy của các thị trường mới nổi</h3>
      <p class="mb-4 text-lg">Với tiềm năng tăng trưởng cao, các thị trường mới nổi tại Đông Nam Á và châu Phi đang thu hút dòng vốn đầu tư mạnh mẽ. Việt Nam, với sự ổn định chính trị và tăng trưởng kinh tế ấn tượng, là một ví dụ điển hình.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">4. Tài sản số và Blockchain</h3>
      <p class="mb-4 text-lg">Dù còn nhiều biến động, tài sản số như Bitcoin và các ứng dụng công nghệ blockchain vẫn là một lĩnh vực đầy tiềm năng, thu hút các nhà đầu tư mạo hiểm.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">5. Y tế và Công nghệ sinh học</h3>
      <p class="mb-4 text-lg">Đại dịch đã thúc đẩy sự phát triển của ngành y tế. Các công ty dược phẩm, công nghệ sinh học và chăm sóc sức khỏe từ xa (telehealth) đang có những bước tiến vượt bậc.</p>
    `,
  },
  {
    slug: 'xay-dung-danh-muc-dau-tu-da-dang',
    title: 'Nghệ Thuật Xây Dựng Danh Mục Đầu Tư Đa Dạng Hóa',
    excerpt: 'Đa dạng hóa là chìa khóa để quản lý rủi ro và tối ưu hóa lợi nhuận. Tìm hiểu cách xây dựng một danh mục đầu tư cân bằng và hiệu quả.',
    date: 'June 15, 2025',
    author: 'Chuyên gia Tài chính',
    imageUrl: 'https://placehold.co/1200x630.png',
    imageHint: 'investment portfolio',
    content: `
      <p class="mb-4 text-lg">"Không nên bỏ tất cả trứng vào một giỏ" - câu nói kinh điển này là nguyên tắc vàng trong đầu tư. Đa dạng hóa danh mục giúp bạn giảm thiểu tác động tiêu cực khi một loại tài sản hoặc một ngành nào đó suy giảm.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">Bước 1: Xác định mức độ chấp nhận rủi ro</h3>
      <p class="mb-4 text-lg">Bạn là nhà đầu tư mạo hiểm, cân bằng hay thận trọng? Điều này sẽ quyết định tỷ trọng phân bổ các loại tài sản trong danh mục của bạn.</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">Bước 2: Phân bổ tài sản</h3>
      <p class="mb-4 text-lg">Một danh mục cơ bản thường bao gồm cổ phiếu (tăng trưởng cao, rủi ro cao), trái phiếu (thu nhập ổn định, rủi ro thấp), và tiền mặt/tương đương tiền (thanh khoản cao, an toàn).</p>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">Bước 3: Đa dạng hóa trong từng loại tài sản</h3>
      <ul class="list-disc pl-6 mb-4 text-lg">
        <li class="mb-2"><strong>Cổ phiếu:</strong> Đầu tư vào nhiều ngành khác nhau (công nghệ, tài chính, tiêu dùng), nhiều quy mô công ty (lớn, vừa, nhỏ) và nhiều thị trường địa lý.</li>
        <li class="mb-2"><strong>Trái phiếu:</strong> Kết hợp trái phiếu chính phủ (an toàn) và trái phiếu doanh nghiệp (lợi suất cao hơn).</li>
      </ul>
      <h3 class="font-headline text-2xl font-bold mt-6 mb-3">Bước 4: Tái cân bằng định kỳ</h3>
      <p class="mb-4 text-lg">Thị trường luôn biến động, làm thay đổi tỷ trọng ban đầu của bạn. Hãy xem xét và tái cân bằng danh mục hàng quý hoặc hàng năm để đảm bảo nó vẫn phù hợp với mục tiêu của bạn.</p>
    `,
  },
];