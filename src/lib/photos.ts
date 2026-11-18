import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/config";

import aiAssistant from "@/assets/photos/ai-assistant.webp";
import phoneNotify from "@/assets/photos/phone-notify.webp";
import stockScan from "@/assets/photos/stock-scan.webp";
import accounting from "@/assets/photos/accounting.webp";
import smallFactory from "@/assets/photos/small-factory.webp";
import planningBoard from "@/assets/photos/planning-board.webp";
import qrShelf from "@/assets/photos/qr-shelf.webp";
import trainingTablet from "@/assets/photos/training-tablet.webp";
import purchasing from "@/assets/photos/purchasing.webp";
import teamDone from "@/assets/photos/team-done.webp";
import signalTower from "@/assets/photos/signal-tower.webp";
import ownerMeeting from "@/assets/photos/owner-meeting.webp";
import handshake from "@/assets/photos/handshake.webp";
import ownerFloor from "@/assets/photos/owner-floor.webp";
import controlRoom from "@/assets/photos/control-room.webp";
import cadReview from "@/assets/photos/cad-review.webp";
import drawingDesk from "@/assets/photos/drawing-desk.webp";
import model3d from "@/assets/photos/model-3d.webp";
import supplierDeal from "@/assets/photos/supplier-deal.webp";
import maintenance from "@/assets/photos/maintenance.webp";
import dashboard from "@/assets/photos/dashboard.webp";
import factoryWide from "@/assets/photos/factory-wide.webp";
import planner from "@/assets/photos/planner.webp";
import print3d from "@/assets/photos/print-3d.webp";
import paperDrawing from "@/assets/photos/paper-drawing.webp";
import engineerTeam from "@/assets/photos/engineer-team.webp";

type Alt = Record<Locale, string>;
export type PhotoEntry = { src: StaticImageData; alt: Alt };

/** Bộ ảnh minh họa (ảnh tạo bằng AI, anh Kiên cung cấp 18/11/2026). Mô tả đúng nội dung ảnh. */
export const photos = {
  aiAssistant: { src: aiAssistant, alt: { vi: "Nhân viên văn phòng làm việc với trợ lý AI trên máy tính", ja: "PCでAIアシスタントと作業するオフィススタッフ", en: "Office worker working with an AI assistant on a computer" } },
  phoneNotify: { src: phoneNotify, alt: { vi: "Công nhân xem thông báo trên điện thoại sau ca làm", ja: "勤務後にスマートフォンで通知を確認する作業員", en: "Worker checking a notification on a phone after a shift" } },
  stockScan: { src: stockScan, alt: { vi: "Nhân viên kho quét mã vạch nguyên vật liệu", ja: "原材料のバーコードをスキャンする倉庫スタッフ", en: "Warehouse staff scanning material barcodes" } },
  accounting: { src: accounting, alt: { vi: "Kế toán làm việc với laptop và hồ sơ giấy", ja: "ノートPCと書類で作業する経理担当者", en: "Accountant working with a laptop and paper records" } },
  smallFactory: { src: smallFactory, alt: { vi: "Nhà máy sản xuất quy mô vừa và nhỏ vào buổi sáng", ja: "朝の中小規模の工場", en: "A small and medium-sized factory in the morning" } },
  planningBoard: { src: planningBoard, alt: { vi: "Họp ngắn bên bảng kế hoạch dán giấy nhớ", ja: "付箋を貼った計画ボードの前での短い打ち合わせ", en: "Short meeting at a planning board with sticky notes" } },
  qrShelf: { src: qrShelf, alt: { vi: "Quản lý kho quét mã QR trên kệ hàng bằng điện thoại", ja: "スマートフォンで棚のQRコードを読み取る倉庫管理者", en: "Warehouse manager scanning a shelf QR code with a phone" } },
  trainingTablet: { src: trainingTablet, alt: { vi: "Hướng dẫn nhân viên dùng hệ thống trên máy tính bảng", ja: "タブレットでシステムの使い方を教わるスタッフ", en: "Staff being shown how to use the system on a tablet" } },
  purchasing: { src: purchasing, alt: { vi: "Nhân viên mua hàng kiểm tra vật tư tại văn phòng nhà máy", ja: "工場の事務所で資材を確認する購買担当者", en: "Purchasing staff checking materials in the factory office" } },
  teamDone: { src: teamDone, alt: { vi: "Công nhân và quản lý chụp ảnh chung khi hoàn thành đơn hàng", ja: "受注完了を記念して写真を撮る作業員と管理者", en: "Workers and a manager posing together after finishing an order" } },
  signalTower: { src: signalTower, alt: { vi: "Đèn tháp tín hiệu xanh, vàng, đỏ trên máy", ja: "機械の上の赤・黄・緑のシグナルタワー", en: "Red, amber and green signal tower on a machine" } },
  ownerMeeting: { src: ownerMeeting, alt: { vi: "Chủ nhà máy họp với đối tác tại bàn trong xưởng", ja: "工場内のテーブルで取引先と打ち合わせる工場オーナー", en: "Factory owner meeting partners at a table on the shop floor" } },
  handshake: { src: handshake, alt: { vi: "Kỹ sư nhà máy bắt tay đối tác Nhật Bản", ja: "日本の取引先と握手する工場のエンジニア", en: "Factory engineer shaking hands with a Japanese partner" } },
  ownerFloor: { src: ownerFloor, alt: { vi: "Chủ nhà máy nhỏ đứng giữa xưởng sản xuất", ja: "作業場の中央に立つ小規模工場のオーナー", en: "Small factory owner standing on the shop floor" } },
  controlRoom: { src: controlRoom, alt: { vi: "Phòng điều hành sản xuất với nhiều màn hình số liệu", ja: "多数のモニターがある生産管理室", en: "Production control room with several data screens" } },
  cadReview: { src: cadReview, alt: { vi: "Hai kỹ sư xem bản vẽ cơ khí 3D trên màn hình", ja: "画面で3D機械図面を確認する2人のエンジニア", en: "Two engineers reviewing a 3D mechanical drawing on screen" } },
  drawingDesk: { src: drawingDesk, alt: { vi: "Hai kỹ sư xem bản vẽ cơ khí trên bàn văn phòng", ja: "机の上で機械図面を確認する2人のエンジニア", en: "Two engineers reviewing a mechanical drawing on a desk" } },
  model3d: { src: model3d, alt: { vi: "Kỹ sư chỉ vào mô hình 3D chi tiết máy trên màn hình", ja: "画面上の機械部品の3Dモデルを指すエンジニア", en: "Engineer pointing at a 3D model of a machine part on screen" } },
  supplierDeal: { src: supplierDeal, alt: { vi: "Nhân viên mua hàng bắt tay nhà cung cấp bên mẫu vật tư", ja: "資材サンプルを前にサプライヤーと握手する購買担当者", en: "Buyer shaking hands with a supplier over material samples" } },
  maintenance: { src: maintenance, alt: { vi: "Kỹ thuật viên bảo trì kiểm tra máy bằng máy tính bảng", ja: "タブレットで機械を点検する保全技術者", en: "Maintenance technician inspecting a machine with a tablet" } },
  dashboard: { src: dashboard, alt: { vi: "Giám đốc xem bảng số liệu sản lượng trên màn hình lớn", ja: "大型画面で生産量ダッシュボードを見る経営者", en: "Director looking at an output dashboard on a large screen" } },
  factoryWide: { src: factoryWide, alt: { vi: "Toàn cảnh nhà máy sản xuất với dây chuyền và băng chuyền", ja: "生産ラインとコンベアのある工場の全景", en: "Wide view of a factory with production lines and conveyors" } },
  planner: { src: planner, alt: { vi: "Nhân viên kế hoạch sản xuất làm việc với hai màn hình", ja: "2台のモニターで作業する生産計画担当者", en: "Production planner working with two screens" } },
  print3d: { src: print3d, alt: { vi: "Kỹ sư thiết kế cầm mẫu thử in 3D bên máy in", ja: "3Dプリンターの横で試作品を手にする設計エンジニア", en: "Design engineer holding a 3D-printed prototype next to the printer" } },
  paperDrawing: { src: paperDrawing, alt: { vi: "Kỹ sư đối chiếu bản vẽ giấy với chi tiết thực", ja: "紙の図面と実物の部品を照合するエンジニア", en: "Engineers checking a paper drawing against the real part" } },
  engineerTeam: { src: engineerTeam, alt: { vi: "Nhóm kỹ sư trẻ chụp ảnh chung trong xưởng", ja: "工場で集合写真を撮る若手エンジニアのチーム", en: "Team of young engineers posing together in the workshop" } },
} satisfies Record<string, PhotoEntry>;
