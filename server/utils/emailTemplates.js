// export function generateForgetPasswordEmailTemplate(resetPasswordUrl) {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="UTF-8" />
//         <title>Reset Your Password</title>
//       </head>
//       <body style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
//         <table width="100%" cellpadding="0" cellspacing="0">
//           <tr>
//             <td align="center">
//               <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; padding: 30px; border-radius: 8px;">
                
//                 <tr>
//                   <td style="text-align: center;">
//                     <h2 style="color: #333;">ERP System Password Reset Request</h2>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="color: #555; font-size: 15px;">
//                     <p>Hello,</p>
//                     <p>
//                       You requested to reset your password. Click the button below to set a new password.
//                     </p>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td align="center" style="padding: 20px 0;">
//                     <a href="${resetPasswordUrl}"
//                       style="
//                         background-color: #4f46e5;
//                         color: #ffffff;
//                         padding: 12px 24px;
//                         text-decoration: none;
//                         border-radius: 6px;
//                         font-weight: bold;
//                         display: inline-block;
//                       ">
//                       Reset Password
//                     </a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="color: #555; font-size: 14px;">
//                     <p>
//                       This link will expire in <strong>15 minutes</strong>.
//                     </p>
//                     <p>
//                       If you did not request a password reset, please ignore this email.
//                     </p>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="border-top: 1px solid #eee; margin-top: 20px; padding-top: 15px; font-size: 12px; color: #999;">
//                     <p>
//                       © ${new Date().getFullYear()} Your App Name. All rights reserved.
//                     </p>
//                   </td>
//                 </tr>

//               </table>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//   `;
// }





// export function generateForgetPasswordEmailTemplate(resetPasswordUrl) {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <body style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
//         <table width="100%" cellpadding="0" cellspacing="0">
//           <tr>
//             <td align="center">
//               <table width="600" cellpadding="0" cellspacing="0" style="background: #fff; padding: 30px; border-radius: 8px;">
//                 <tr>
//                   <td style="text-align: center;">
//                     <h2 style="color: #333;">ERP System Password Reset Request</h2>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="color: #555; font-size: 15px;">
//                     <p>Hello,</p>
//                     <p>You requested to reset your password. Click the button below to set a new password:</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td align="center" style="padding: 20px 0;">
//                     <a href="${resetPasswordUrl}"
//                       style="background-color: #4f46e5; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
//                       Reset Password
//                     </a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="color: #555; font-size: 14px;">
//                     <p>This link will expire in <strong>15 minutes</strong>.</p>
//                     <p>If you did not request this, please ignore this email.</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #999;">
//                     <p>© ${new Date().getFullYear()} Your App Name. All rights reserved.</p>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//   `;
// }






// export const generateForgetPasswordEmailTemplate = (token) => {
//   const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${token}`;
//   return `
//     <h2>ERP System Password Reset</h2>
//     <p>Click the button below to reset your password:</p>
//     <a href="${resetUrl}" style="padding:10px; background:#4f46e5; color:#fff; text-decoration:none;">
//       Reset Password
//     </a>
//     <p>If the button doesn’t work, copy and paste this link into your browser:</p>
//     <p>${resetUrl}</p>
//     <p>This link will expire in 15 minutes.</p>
//   `;
// };

