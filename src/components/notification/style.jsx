import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 240px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const DropdownHeader = styled.h4`
  margin: 0;
  padding: 0.75rem;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
  background: #f8f9fa;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: #333;
`;

export const EmptyMessage = styled.p`
  padding: 1rem;
  text-align: center;
  margin: 0;
  font-size: 0.875rem;
  color: #666;
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  color: #333;
  cursor: default;

  &:hover {
    background: #f8f8f8; /* hover 효과 */
  }
`;

export const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 8px;
  font-weight: bold;
`;
