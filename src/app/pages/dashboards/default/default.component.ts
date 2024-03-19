import { Component, OnInit, ViewChild } from '@angular/core';
import { emailSentBarChart, monthlyEarningChart } from './data';
import { ChartType, DataDefault, StatData, Transaction } from './dashboard.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isVisible: string;

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  dataDefault?: DataDefault[];
  transactions: Transaction[];
  statData: StatData[];

  isActive: string;

  @ViewChild('content') content;
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, private configService: ConfigService, private eventService: EventService,private route : ActivatedRoute) {
  }

  ngOnInit() {
  }
}
