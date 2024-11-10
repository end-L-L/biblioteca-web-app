import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MembersService } from '../../services/members.service'; // Asegúrate de que la ruta sea correcta

interface Member {
  id: string;
  name: string;
  membershipNumber: number;
  active: boolean;
}
@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'membershipNumber', 'active'];
  dataSource = new MatTableDataSource<Member>();

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.membersService.GetMembers().subscribe((members) => {
      this.dataSource.data = members;
    });
    
  }
}
